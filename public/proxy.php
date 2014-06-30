<?php


ini_set('memory_limit','200M');

//sleep(2);

if (isset($_SERVER['_ENV']) && $_SERVER['_ENV'] == "production") {
    define('API_URL',               'http://api.co-parent-match.com/');
    define('CURRENT_PROXY_URL',     'http://www.co-parent-match.com/proxy.php');
    define('CURRENT_PROXY_URL_TWO', 'http://co-parent-match.com/proxy.php');
} else {
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
    define('API_URL', 'http://local.api.co-parent-match.com/');
    define('CURRENT_PROXY_URL', 'http://local.backbone.co-parent-match.com/proxy.php');
    define('CURRENT_PROXY_URL_TWO', 'http://local.backbone.co-parent-match.com/proxy.php');
}


if (isset($_GET['debug'])) {
    echo "API URL: ".API_URL.'<br />';
    echo "Current proxy url 1 : ".CURRENT_PROXY_URL.'<br />';
    echo "Current proxy url 1 : ".CURRENT_PROXY_URL_TWO.'<br />';
}


session_start();


function getCurrentPageUrl() {
    $pageURL = 'http';
    if (isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
    $pageURL .= "://";
    if ($_SERVER["SERVER_PORT"] != "80") {
        $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
    } else {
        $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
    }
    return $pageURL;
}


/* open source rest */
class OpenSource_Rest {


    protected $url;
    protected $verb;
    protected $requestBody;
    protected $requestLength;
    protected $username;
    protected $password;
    protected $acceptType;
    protected $responseBody;
    protected $responseInfo;


    public function __construct ($url = null, $verb = 'GET', $requestBody = null) {

        //the api doesn't support true put yet, so it's hacktime
        if ($verb == 'PUT'){
            $requestBody['_method'] = 'put';
            $verb = 'POST';
        }

        $this->url				= $url;
        $this->verb				= $verb;
        $this->requestBody		= $requestBody;
        $this->requestLength	= 0;
        $this->username			= null;
        $this->password			= null;
        $this->acceptType		= 'application/json';
        $this->responseBody		= null;
        $this->responseInfo		= null;

        if ($this->requestBody !== null) {
            $this->buildPostBody();
        }
    }


    public function flush () {
        $this->requestBody		= null;
        $this->requestLength	= 0;
        $this->verb				= 'GET';
        $this->responseBody		= null;
        $this->responseInfo		= null;
    }


    public function execute () {
        $ch = curl_init();

        $this->setAuth($ch);
        try {
            switch (strtoupper($this->verb)) {
                case 'GET':
                    $this->executeGet($ch);
                    break;
                case 'POST':
                    $this->executePost($ch);
                    break;
                case 'PUT':
                    $this->executePut($ch);
                    break;
                case 'DELETE':
                    $this->executeDelete($ch);
                    break;
                default:
                    throw new InvalidArgumentException('Current verb (' . $this->verb . ') is an invalid REST verb.');
            }
        }
        catch (InvalidArgumentException $e) {
            curl_close($ch);
            throw $e;
        }
        catch (Exception $e) {
            curl_close($ch);
            throw $e;
        }
    }


    public function buildPostBody ($data = null) {

        $data = ($data !== null) ? $data : $this->requestBody;

        if (!is_array($data)) {

            throw new InvalidArgumentException('Invalid data input for postBody.  Array expected');
        }

        $data = http_build_query($data, '', '&');
        $this->requestBody = $data;
    }


    protected function executeGet($ch) {
        $this->doExecute($ch);
    }


    protected function executePost ($ch) {

        if (!is_string($this->requestBody)) {
            $this->buildPostBody();
        }

        curl_setopt($ch, CURLOPT_POSTFIELDS, $this->requestBody);
        curl_setopt($ch, CURLOPT_POST, 1);
        $this->doExecute($ch);
    }


    protected function executePut($ch) {

        if (!is_string($this->requestBody)) {
            $this->buildPostBody();
        }

        $this->requestLength = strlen($this->requestBody);

        $fh = fopen('php://memory', 'rw');
        fwrite($fh, $this->requestBody);
        rewind($fh);

        curl_setopt($ch, CURLOPT_INFILE, $fh);
        curl_setopt($ch, CURLOPT_INFILESIZE, $this->requestLength);
        curl_setopt($ch, CURLOPT_PUT, true);

        $this->doExecute($ch);
        fclose($fh);
    }


    protected function executeDelete ($ch) {
        if (!is_string($this->requestBody)) {
            $this->buildPostBody();
        }

        curl_setopt($ch, CURLOPT_POSTFIELDS, $this->requestBody);
        curl_setopt($ch, CURLOPT_POST, 1);
        $this->doExecute($ch);
    }


    protected function doExecute (&$curlHandle) {
        $this->setCurlOpts($curlHandle);
        $this->responseBody = curl_exec($curlHandle);
        $this->responseInfo	= curl_getinfo($curlHandle);
        curl_close($curlHandle);
    }


    protected function setCurlOpts (&$curlHandle) {
        curl_setopt($curlHandle, CURLOPT_TIMEOUT, 5);
        curl_setopt($curlHandle, CURLOPT_URL, $this->url);
        curl_setopt($curlHandle, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curlHandle, CURLOPT_HTTPHEADER, array ('Accept: ' . $this->acceptType));
    }


    protected function setAuth (&$curlHandle) {

        if ($this->username !== null && $this->password !== null)
        {
            curl_setopt($curlHandle, CURLOPT_HTTPAUTH, CURLAUTH_DIGEST);
            curl_setopt($curlHandle, CURLOPT_USERPWD, $this->username . ':' . $this->password);
        }
    }


    public function getAcceptType () {
        return $this->acceptType;
    }


    public function setAcceptType ($acceptType) {
        $this->acceptType = $acceptType;
    }


    public function getPassword () {
        return $this->password;
    }


    public function setPassword ($password) {
        $this->password = $password;
    }


    public function getResponseBody () {
        return $this->responseBody;
    }


    public function getBody() {

        try {
            if ($this->getHttpCode() != 200) {
                // echo 'error';//new Model_Log_Rest(array('http_code' => $this->getHttpCode(), 'body' => $this->getResponseBody(), 'url' => $this->getUrl(), 'response' => $this->getResponseInfo()));
            }
        } catch (exception $e) {
            //do nothing
            print_r($e);exit;
        }
        $items = json_decode($this->getResponseBody());
        if (@array_key_exists('data', $items)) {
            return $items->data;
        }
        return $items;
    }


    public function getResponseInfo () {
        return $this->responseInfo;
    }


    public function getHttpCode() {
        $data = $this->getResponseInfo();
        return $data['http_code'];
    }


    public function getUrl () {
        return $this->url;
    }


    public function setUrl ($url) {
        $this->url = $url;
    }


    public function getUsername () {
        return $this->username;
    }


    public function setUsername ($username) {
        $this->username = $username;
    }


    public function getVerb () {
        return $this->verb;
    }


    public function setVerb ($verb) {
        $this->verb = $verb;
    }


}


/* proxy controller */
class ProxyController
{


    protected function getStatusString ($code) {

        $status_codes = array(100 => array('HTTP/1.1', 'Continue'), 101 => array('HTTP/1.1', 'Switching Protocols'), 200 => array('HTTP/1.0', 'OK'), 201 => array('HTTP/1.0', 'Created'),
            202 => array('HTTP/1.0', 'Accepted'), 203 => array('HTTP/1.0', 'Non-Authoritative Information'), 204 => array('HTTP/1.0', 'No Content'),
            205 => array('HTTP/1.0', 'Reset Content'), 206 => array('HTTP/1.0', 'Partial Content'), 300 => array('HTTP/1.0', 'Multiple Choices'),
            301 => array('HTTP/1.0', 'Permanently at another address - consider updating link'), 302 => array('HTTP/1.1', 'Found at new location - consider updating link'),
            303 => array('HTTP/1.1', 'See Other'), 304 => array('HTTP/1.0', 'Not Modified'), 305 => array('HTTP/1.0', 'Use Proxy'), 306 => array('HTTP/1.0', 'Switch Proxy'),  // No
            // longer
            // used,
            // but
            // reserved
            307 => array('HTTP/1.0', 'Temporary Redirect'), 400 => array('HTTP/1.0', 'Bad Request'), 401 => array('HTTP/1.0', 'Authorization Required'),
            402 => array('HTTP/1.0', 'Payment Required'), 403 => array('HTTP/1.0', 'Forbidden'), 404 => array('HTTP/1.0', 'Not Found'), 405 => array('HTTP/1.0', 'Method Not Allowed'),
            406 => array('HTTP/1.0', 'Not Acceptable'), 407 => array('HTTP/1.0', 'Proxy Authentication Required'), 408 => array('HTTP/1.0', 'Request Timeout'),
            409 => array('HTTP/1.0', 'Conflict'), 410 => array('HTTP/1.0', 'Gone'), 411 => array('HTTP/1.0', 'Length Required'), 412 => array('HTTP/1.0', 'Precondition Failed'),
            413 => array('HTTP/1.0', 'Request Entity Too Large'), 414 => array('HTTP/1.0', 'Request-URI Too Long'), 415 => array('HTTP/1.0', 'Unsupported Media Type'),
            416 => array('HTTP/1.0', 'Requested Range Not Satisfiable'), 417 => array('HTTP/1.0', 'Expectation Failed'), 449 => array('HTTP/1.0', 'Retry With'),  // Microsoft
            // extension
            500 => array('HTTP/1.0', 'Internal Server Error'), 501 => array('HTTP/1.0', 'Not Implemented'), 502 => array('HTTP/1.0', 'Bad Gateway'),
            503 => array('HTTP/1.0', 'Service Unavailable'), 504 => array('HTTP/1.0', 'Gateway Timeout'), 505 => array('HTTP/1.0', 'HTTP Version Not Supported'),
            509 => array('HTTP/1.0', 'Bandwidth Limit Exceeded'));


        if (isset($status_codes[$code]))
            return implode(' ' . $code . ' ', $status_codes[$code]);
        return implode(' ' . $code . ' ', $status_codes[200]);
    }


    public function setURL($url) {
        $this->url = $url;
    }
    public function indexAction () {

        # user activate
        if ($this->url == API_URL.'signout') {

            # Unset all of the session variables.
            $_SESSION = array();

            # If it's desired to kill the session, also delete the session cookie.
            # note: This will destroy the session, and not just the session data!
            if (ini_get("session.use_cookies")) {
                $params = session_get_cookie_params();
                setcookie(session_name(), '', time() - 42000,
                    $params["path"], $params["domain"],
                    $params["secure"], $params["httponly"]
                );
            }

            # Finally, destroy the session.
            session_destroy();
            echo json_encode(true);
            exit;


        # we are logging in, so auth
        } else if ($this->url == API_URL.'signin' && isset($_POST)) {
            $request = new OpenSource_Rest(API_URL.'system/session', 'GET');
            $request->setUsername($_POST['user']['email']);
            $request->setPassword($_POST['user']['password']);
            $request->execute();
            $sessionId = $request->getBody();

            /* if we have a session id then set it for future use */
            if ($sessionId && !isset($sessionId->errors)) {
                $this->session_id = $_SESSION['session_id'] = $sessionId;
                /* now fetch the user */
                $request = new OpenSource_Rest(API_URL.'system/user?session_id='.$this->session_id, 'GET');
                $request->execute();
                $login = $request->getBody();
                echo json_encode(array('user' => $login->user, 'login' => true));
                exit;
            } else {
                header("HTTP/1.0 500 Internal Server Error");
                echo json_encode(array('user' => false, 'login' => false));
                exit;
            };


        # signing up
        } else if ($this->url == API_URL.'signup' && !empty($_POST)) {
            /* if we have a session id then set it for future use */
            /* now fetch the user */
            $request = new OpenSource_Rest(API_URL.'system/session', 'GET');
            $request->setUsername('user.one@gmail.com');
            $request->setPassword('admin123');
            $request->execute();
            $sessionId = $request->getBody();

            /* if we have a session id then set it for future use */
            if ($sessionId) {
                $request = new OpenSource_Rest(API_URL.'user?session_id='.$sessionId, 'POST', $_POST);
                $request->execute();
                $result = $request->getBody();

                if (isset($result->code)) {
                    echo json_encode(array('created' => false, 'result' => $result->message, 'problem' => isset($result->data) ? $result->data : array()));
                    exit;
                }
                //create user and mail it on
                echo json_encode(array('created' => true, 'result' => $result, 'other' => print_r($result,true)));
                exit;
            } else {
                echo json_encode(array('created' => false));
                exit;
            }
        }



        $this->session_id = isset($_SESSION['session_id']) ? $_SESSION['session_id'] : false;;
        $this->url .= empty($_SERVER['QUERY_STRING']) ? '?session_id='.$this->session_id : '&session_id='.$this->session_id;


        switch ($_SERVER['REQUEST_METHOD']) {
            case 'DELETE':
                $postData = isset($_POST['model']) ? (array) json_decode(stripslashes($_POST['model'])) : $_POST;
                $postData['_method'] = 'delete';
                $request = new OpenSource_Rest($this->url, 'DELETE', $postData);
                break;
            case 'PUT':
                parse_str(file_get_contents('php://input', false , null, -1 , $_SERVER['CONTENT_LENGTH'] ), $postData);
                $postData = isset($postData['model']) ? (array) json_decode(stripslashes($postData['model'])) : $postData;
                $postData['_method'] = 'put';

                $request = new OpenSource_Rest($this->url, 'POST', $postData);
                break;
            case 'POST':
                $postData = isset($_POST['model']) ? (array) json_decode(stripslashes($_POST['model'])) : $_POST;
                $postData['_method'] = 'post';
                $request = new OpenSource_Rest($this->url, 'POST', $postData);
                break;
            default:
                $request = new OpenSource_Rest($this->url, 'GET');
                break;
        }

        $request->execute();
        $response = $request->getBody();
        $code = $request->getHttpCode();

        if ($response === null) {
            $errorObject = new stdClass();
            $errorObject->errors = new stdClass();
            $errorObject->errors->code = 500;
            $errorObject->errors->url = $request->getUrl();
            $errorObject->errors->message = 'Connection Timed Out';//: '.print_r($request, true);
            $response = $errorObject; // json_encode($errorObject);
            header("HTTP/1.0 500 Internal Server Error");
        } else {
            header($this->getStatusString($request->getHttpCode()));
        }

        echo json_encode($response);
    }
}


$url = getCurrentPageUrl();
$url = str_replace(CURRENT_PROXY_URL.'/', API_URL, $url);
$url = str_replace(CURRENT_PROXY_URL_TWO.'/', API_URL, $url);

$class = new ProxyController();
$class->setURL($url);
$class->indexAction();
exit;