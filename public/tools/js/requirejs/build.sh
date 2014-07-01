#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"


rm -drf ../../../public/js/build
node ../../../js/libs/require/r.js -o build-config.js