define(["baseModel"],
  function(baseModel) {
  return baseModel.extend({


    urlRoot: "profile",


    getIsAOptions: function() {
      return [
//        {id: '4,5,6,7,9', 'humanised': 'Male'},
//        {id: '1,2,3,8,9', 'humanised': 'Female'},

        {id: '1', 'humanised': 'Single Gay Female'},
        {id: '2', 'humanised': 'Single Bi Female'},
        {id: '3', 'humanised': 'Single Straight Female'},

        {id: '4', 'humanised': 'Single Gay Male'},
        {id: '5', 'humanised': 'Single Bi Male'},
        {id: '6', 'humanised': 'Single Straight Male'},

        {id: '7', 'humanised': 'Gay Male Couple'},
        {id: '8', 'humanised': 'Gay Female Couple'},
        {id: '9', 'humanised': 'Male / Female Couple'}
      ];
    },


    getIsForOptions: function() {
      return [
        {id: '1', 'humanised': 'Donor Only Role'},
        {id: '2', 'humanised': 'Discuss co-parenting options'},
        {id: '3', 'humanised': 'Active co-parenting'}
      ];
    },


    getHeightOptions: function() {
      return [
        {id: '2', 'humanised': "5 or below"},
        {id: '3', 'humanised': "5'1"},
        {id: '4', 'humanised': "5'2"},
        {id: '5', 'humanised': "5'3"},
        {id: '6', 'humanised': "5'4"},
        {id: '7', 'humanised': "5'5"},
        {id: '8', 'humanised': "5'6"},
        {id: '9', 'humanised': "5'7"},
        {id: '10', 'humanised': "5'8"},
        {id: '11', 'humanised': "5'9"},
        {id: '12', 'humanised': "5'10"},
        {id: '13', 'humanised': "5'11"},
        {id: '14', 'humanised': "6'"},
        {id: '15', 'humanised': "6'1"},
        {id: '16', 'humanised': "6'2"},
        {id: '17', 'humanised': "6'3"},
        {id: '18', 'humanised': "6'4"},
        {id: '19', 'humanised': "6'5"},
        {id: '20', 'humanised': "6'6"},
        {id: '21', 'humanised': "6'7"},
        {id: '22', 'humanised': "6'8"},
        {id: '23', 'humanised': "6'9"},
        {id: '24', 'humanised': "6'10"},
        {id: '25', 'humanised': "6'11"},
        {id: '26', 'humanised': "7 or above"}
      ];
    },


    getSexOptions: function() {
      return [
        {id: 'M', 'humanised': 'Male'},
        {id: 'F', 'humanised': 'Female'},
        {id: 'O', 'humanised': 'Other'},
      ];
    },


    getEducationOptions: function() {
      return [
        {id: '1', 'humanised': 'High School'},
        {id: '2', 'humanised': 'College'},
        {id: '3', 'humanised': 'University'},
      ];
    },


    getReligionOptions: function() {
      return [
        {id: '1', 'humanised': 'Agnostic'},
        {id: '2', 'humanised': 'Athiest'},
        {id: '3', 'humanised': 'Buddist'},
        {id: '4', 'humanised': 'Christian'},
        {id: '5', 'humanised': 'Jewish'},
        {id: '6', 'humanised': 'Pagan'},
        {id: '7', 'humanised': 'Other'}
      ];
    },


    getStarsignOptions: function() {
      return [
        {id: '1', 'humanised': 'Aries'},
        {id: '2', 'humanised': 'Taurus'},
        {id: '3', 'humanised': 'Gemini'},
        {id: '4', 'humanised': 'Cancer'},
        {id: '5', 'humanised': 'Leo'},
        {id: '6', 'humanised': 'Virgo'},
        {id: '7', 'humanised': 'Libra'},
        {id: '8', 'humanised': 'Scorpio'},
        {id: '9', 'humanised': 'Sagittarius'},
        {id: '10', 'humanised': 'Capricorn'},
        {id: '11', 'humanised': 'Aquarius'},
        {id: '12', 'humanised': 'Pisces'}
      ];
    },


    getIncomeOptions: function() {
      return [
        {id: '1', 'humanised': 'Average Income'},
        {id: '2', 'humanised': 'Above Average Income'},
        {id: '3', 'humanised': 'High Income'}
      ];
    },


    getHairColourOptions: function() {
      return [
        {id: '1', 'humanised': 'Blonde'},
        {id: '2', 'humanised': 'Dark Blond'},
        {id: '3', 'humanised': 'Brown'},
        {id: '4', 'humanised': 'Light Brown'},
        {id: '5', 'humanised': 'Black'},
        {id: '6', 'humanised': 'Red'},
        {id: '7', 'humanised': 'Other'}
      ];
    },


    getBodyOptions: function() {
      return [
        {id: '1', 'humanised': 'Slim'},
        {id: '2', 'humanised': 'Medium Build'},
        {id: '3', 'humanised': 'Athletic'},
        {id: '4', 'humanised': 'Large'},
        {id: '5', 'humanised': 'Stocky'},
        {id: '6', 'humanised': 'Big Boned'}
      ];
    },


    getEthnicOptions: function() {
      return [
        {id: '1', 'humanised': 'Arab'},
        {id: '2', 'humanised': 'Asian'},
        {id: '3', 'humanised': 'South Asian'},
        {id: '4', 'humanised': 'Black'},
        {id: '5', 'humanised': 'Caucasian'},
        {id: '6', 'humanised': 'Hispanic'},
        {id: '7', 'humanised': 'Middle Eastern'},
        {id: '8', 'humanised': 'Mixed Race'},
        {id: '9', 'humanised': 'Other'}
      ];
    },


    getEyeColourOptions: function() {
      return [
        {id: '1', 'humanised': 'Blue'},
        {id: '2', 'humanised': 'Green'},
        {id: '3', 'humanised': 'Hazel'},
        {id: '4', 'humanised': 'Brown'},
        {id: '5', 'humanised': 'Dark Brown'},
        {id: '6', 'humanised': 'Other'}
      ];
    },


    getScreeningOptions: function() {
      return [
        {id: '1', 'humanised': 'Yes'},
        {id: '2', 'humanised': 'No'}
      ];
    },


    getSmokeOptions: function() {
      return [
        {id: '1', 'humanised': 'Yes'},
        {id: '2', 'humanised': 'No'}
      ];
    },


    getDrinkOptions: function() {
      return [
        {id: '1', 'humanised': 'Yes'},
        {id: '2', 'humanised': 'No'}
      ];
    }


  });
})