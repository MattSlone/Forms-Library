'use strict'

var checkSmall = function() {
  var footer = document.querySelector(".form-container__footer");
  if(!footer) {
    return false;
  } else {
    var flexDirection = window.getComputedStyle(footer).getPropertyValue('flex-direction');

    if(flexDirection == "column") {
      return true;
    } else {
      return false;
    }
  }
};

var fairForms = angular.module('fairForms', ['ui.router']);

angular.module('fairForms')
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise(((checkSmall()) ? '/forms' : '/forms'));
  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/forms',
      templateUrl: 'public/partials/home.html'
    })
    .state('downloads', {
      url: '/forms/downloads',
      templateUrl: 'public/partials/downloads.html'
    })
    .state('form', {
      url: "/form",
      templateUrl: "public/partials/main.html",
      controller: "FormController"
    })
    .state('form.start', {
      url: "/start",
      templateUrl: "public/partials/start.html"
    })
    .state('form.dealerinfo', {
      url: "/dealer-info",
      templateUrl: "public/partials/dealerinfo.html"
    })
    .state('form.personnel', {
      url: "/personnel",
      templateUrl: "public/partials/personnel.html"
    })
    .state('form.producerinfo', {
      url: "/producer-info",
      templateUrl: "public/partials/producer-info.html"
    })
    .state('form.companystructure', {
      url: "/company-structure",
      templateUrl: "public/partials/companystructure.html"
    })
    .state('form.licenses', {
      url: "/licenses",
      templateUrl: "public/partials/licenses.html"
    })
    .state('form.confirmations', {
      url: "/email-confirmations",
      templateUrl: "public/partials/confirmations.html"
    })
    .state('form.finish', {
      url: "/finish",
      templateUrl: "public/partials/finish.html"
    })
    .state('form.full', {
      url: "/",
      templateUrl: "public/partials/full.html"
    });

    $locationProvider.html5Mode(true);
});

angular.module('fairForms')
.controller('cityController', function($scope) {
  $scope.cities = [
    {'text': "Sarasota"},
    {'text': "•"},
    {'text': "Chicago"},
    {'text': "•"},
    {'text': "Detroit"},
    {'text': "•"},
    {'text': "New York"},
    {'text': "•"},
    {'text': "Long Island"}
  ];
});

angular.module('fairForms')
.controller('contactController', function($scope) {
  $scope.contactInfo = [
    {'text': "Phone: 844.3247.552"},
    {'text': "Fax: 941.315.8507"},
    {'text': "8374 Market Street #180, Lakewood Ranch, Florida 34202"}
  ];
});

angular.module('fairForms')
.controller('downloadsController', function($scope) {
  $scope.cards = [
    {'name': "PRODUCER INFORMATION",
     'summary': "Agreement and Questionnaire forms for producers to download and complete.",
     'isFlipped': 'isFlipped0',
     'link1Name': 'Producer Agreement',
     'link2Name': 'Producer Questionnaire',
     'link1': 'https://fairholdingsllc.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=VTVPhuCx%2bSm08ZfQo3XaYlNMNlT%2foBF0N%2fcbIcIu3sg%3d&docid=07ac431d52a124be5b6c9209f54251b21',
     'link2': 'https://fairholdingsllc.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=YvEpRuHjHubSTlZfr%2fPd2nWksLtes6emOsTjVSDm33k%3d&docid=031c631a638c04f5c994a75e9e21544f8'},
    {'name': "BIOSPECIMEN TRANSIT",
     'summary': "This program insures Biological Specimen(s) while being transported between various locations. This coverage includes unique options.",
     'isFlipped': 'isFlipped3',
     'link1Name': 'Marketing Brochure',
     'link1': 'https://fairholdingsllc.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=j0gP8%2fbEtM9NFY2cvFLjbN2bCOuoe%2bNWBsEzExjAfV8%3d&docid=0273ca8f403e8475a80cfbceb75a4435f'},
    {'name': "NOA BASE STATION",
     'summary': "This program was designed for Base Station Dispatch Companies which dispatch “Black Car” vehicles that transport third party passengers.",
     'isFlipped': 'isFlipped5',
     'link1Name': 'Marketing Brochure',
     'link1': 'https://fairholdingsllc.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=Qimdq7RuhY6qb%2fIYnumMXyl3fmztdVL1%2fM2c6tk9df0%3d&docid=041458a8787d0446d8e07dc357c41e635'},
     {'name': "CRYOGENIC STORAGE",
     'summary': "This program insures medical facilities, such as IVF centers, against financial loss of Oocytes stored in cryogenic storage unit(s).",
     'isFlipped': 'isFlipped4',
     'link1Name': 'Marketing Brochure',
     'link1': 'https://fairholdingsllc.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=JTVQZejrw7ksZoC4ibpFqgjLKmpFLMAtoqDmxkWDPRM%3d&docid=0cd3efdd60588453eaf020564cd9aaf4b'},
    {'name': "EGG DONOR INSURANCE",
     'summary': "This program provides medical expense liability / complication insurance for fertility practices utilizing egg donor services.",
     'isFlipped': 'isFlipped6',
     'link1Name': 'Marketing Brochure',
     'link1': 'https://fairholdingsllc.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=IB4CnKnuLRrLTUI62YccbTHXGWPSbHI6eQtJ6c0iW3Y%3d&docid=00cea1e1eb8de41499e4c0f04ff0a7239'},
    {'name': "SURROGACY INSURANCE",
     'summary': "This program provides payment or reimbursement of medical expenses due to complications during the pregnancy of a surrogate.",
     'isFlipped': 'isFlipped9',
     'link1Name': 'Marketing Brochure',
     'link1': 'https://fairholdingsllc.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=h%2bmA5BkcuQ5T4R82xSs4Sd823PUtfyllZUQp00Qp27I%3d&docid=02b45be0af4054c8c8c738161b71def3b'},
    {'name': "SURROGACY NON-INSURANCE",
     'summary': "This surrogacy program is identical to the insured surrogacy program in that it provides medical services, but there is no insurance coverage.",
     'isFlipped': 'isFlipped10',
     'link1Name': 'Marketing Brochure',
     'link1': 'https://fairholdingsllc.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=sOyceuP1Wq2RAjRQeQu7QYzAipINAv6f3%2bFU95Ocvlc%3d&docid=01a88139d2dc440edb7a27a07c5306ada'},
    {'name': "FAIR LLC",
     'summary': "Marketing Information for Finance and Insurance Resources.",
     'isFlipped': 'isFlipped1',
     'link1Name': 'Marketing Brochure',
     'link1': 'https://fairholdingsllc.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=z4KLV%2byDPtWg4FZ14eIrkPkcY3pGG0UaDSfs6Y9oUjM%3d&docid=09a48a70e783d421aa55708880354fa1b'},
    {'name': "TITLE E & O",
     'summary': "Marketing Information for the Title Errors & Omissions Program.",
     'isFlipped': 'isFlipped2',
     'link1Name': 'Marketing Brochure',
     'link1': 'https://fairholdingsllc.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=UMPMIekgdaRR5fGZdz0g8uJ5KoCovJmFWbvtbNKwbSw%3d&docid=0190ae72243d2465aa5a9026eca8813f2'},
    {'name': "GAP INSURANCE",
     'summary': "Marketing Information for the GAP Insurance Program.",
     'isFlipped': 'isFlipped7',
     'link1Name': 'Marketing Brochure',
     'link1': 'https://fairholdingsllc.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=cJN40TECGl3zOmArG3o9FTaHR4Qf6ihrrZCHK%2fnOg2A%3d&docid=0bdc583eaa8504e33b187eb2df1eab2fc&rev=1'},
    {'name': "LSI INSURANCE",
     'summary': "Marketing Information for the LSI Insurance Program.",
     'isFlipped': 'isFlipped8',
     'link1Name': 'Marketing Brochure',
     'link1': 'https://fairholdingsllc.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=IWhjUULzFJvWlEXL1AQm%2fWU3uD4lDhrVgXuPQDrj%2b6c%3d&docid=0ef9a9c4e605b4360b370ff21237e9ca6&rev=1'},
  ];
});

angular.module('fairForms')
.controller('flipController', function($scope) {
  $scope.cards = [
    {'name': "PRODUCER QUESTIONNAIRE",
     'summary': "This form must be completed before Producers and Agents can begin working with other FAIR programs.",
     'isFlipped': 'isFlipped0',
     'application': 'http://www.fair-forms.com/forms/Questionnaire/index.php'},
    {'name': "BIOSPECIMEN TRANSIT",
     'summary': "This program insures Biological Specimen(s) while being transported between various locations. This coverage includes unique options.",
     'isFlipped': 'isFlipped1',
     'programInfo': 'http://www.fairllc.com/biospecimen-transit',
     'application': 'http://www.fair-forms.com/forms/Cryo%20Transit/index.php',
     'brochure': 'https://d1fkwa1hd8qd6y.cloudfront.net/FAC7232F-1B5F-434C-BA49-99BE850A5A91/ec9cd5cc-62ae-4e42-b7e8-07edd21b5b5f.pdf'},
    {'name': "TRANSIT REPORTING",
     'summary': "This is the reporting form for the Biospecimen Transit program. Reported on a monthly basis.",
     'isFlipped': 'isFlipped2',
     'programInfo': 'http://www.fairllc.com/biospecimen-transit',
     'application': 'http://www.fair-forms.com/forms/Transit%20Reporting/index.php'},
    {'name': "CRYOGENIC STORAGE",
     'summary': "This program insures medical facilities, such as IVF centers, against financial loss of Oocytes stored in cryogenic storage unit(s).",
     'isFlipped': 'isFlipped3',
     'programInfo': 'http://www.fairllc.com/cyrogenic-storage',
     'application': 'http://www.fair-forms.com/forms/Cryo%20Storage/StorageInsuranceApplication.php',
     'brochure': 'https://d1fkwa1hd8qd6y.cloudfront.net/FAC7232F-1B5F-434C-BA49-99BE850A5A91/4f2eb2d5-d997-4132-a6ba-604982c1d33a.pdf'},
    {'name': "NOA BASE STATION",
     'summary': "This program was designed for Base Station Dispatch Companies which dispatch “Black Car” vehicles that transport third party passengers.",
     'isFlipped': 'isFlipped4',
     'programInfo': 'http://www.fairllc.com/non-owned-auto',
     'application': 'http://www.fair-forms.com/forms/black%20car/index.php',
     'brochure': 'https://d1fkwa1hd8qd6y.cloudfront.net/FAC7232F-1B5F-434C-BA49-99BE850A5A91/71af1dc6-216d-4061-ac0e-a7fc08d019fe.pdf'},
    {'name': "JUDGMENT OR ASSET LIABILITY",
     'summary': "This program provides indemnity protection to a chosen beneficiary for a lawsuit judgment in excess of your professional liability limit.",
     'isFlipped': 'isFlipped5',
     'programInfo': 'http://www.fairllc.com/judgement-asset-liability',
     'application': '/',
     'brochure': '/'},
    {'name': "EGG DONOR INSURANCE",
     'summary': "This program provides medical expense liability / complication insurance for fertility practices utilizing egg donor services.",
     'isFlipped': 'isFlipped6',
     'programInfo': 'http://www.fairllc.com/egg-donor',
     'application': 'http://www.fair-forms.com/forms/Egg%20Donor/index.php',
     'brochure': 'https://d1fkwa1hd8qd6y.cloudfront.net/FAC7232F-1B5F-434C-BA49-99BE850A5A91/d80c8384-1bae-4bbb-94a7-d11fb37e0a08.pdf'},
    {'name': "EGG DONOR REPORTING",
      'summary': "This is the reporting form for the Egg Donor program. Reported on a monthly basis.",
      'isFlipped': 'isFlipped7',
      'programInfo': 'http://www.fairllc.com/egg-donor',
      'application': 'http://www.fair-forms.com/forms/Egg%20Donor/index.php',
      'brochure': 'https://d1fkwa1hd8qd6y.cloudfront.net/FAC7232F-1B5F-434C-BA49-99BE850A5A91/d80c8384-1bae-4bbb-94a7-d11fb37e0a08.pdf'},
    {'name': "SURROGACY INSURANCE",
     'summary': "This program provides payment or reimbursement of medical expenses due to complications during the pregnancy of a surrogate.",
     'isFlipped': 'isFlipped8',
     'programInfo': 'http://www.fairllc.com/surrogacy-insurance',
     'application': '/',
     'brochure': 'https://d1fkwa1hd8qd6y.cloudfront.net/FAC7232F-1B5F-434C-BA49-99BE850A5A91/07de6382-94c4-4cad-9108-dfd9b8bb4278.pdf'},
    {'name': "SURROGACY NON-INSURANCE",
     'summary': "This surrogacy program is identical to the insured surrogacy program in that it provides medical services, but there is no insurance coverage.",
     'isFlipped': 'isFlipped9',
     'programInfo': 'http://www.fairllc.com/surrogacy-non-insurance',
     'application': '/',
     'brochure': 'https://d1fkwa1hd8qd6y.cloudfront.net/FAC7232F-1B5F-434C-BA49-99BE850A5A91/1df88bfe-1234-423a-98d1-729c0534fb36.pdf'},
    {'name': "COMPLETE ASSET PROTECTION",
     'summary': "This program protects all loans and leases against many types of perils and exposures.",
     'isFlipped': 'isFlipped10',
     'application': 'http://fair-forms.com/forms/CAP/index.php',
     'brochure': 'https://fairholdingsllc.sharepoint.com/_layouts/15/guestaccess.aspx?guestaccesstoken=IWhjUULzFJvWlEXL1AQm%2fWU3uD4lDhrVgXuPQDrj%2b6c%3d&docid=0ef9a9c4e605b4360b370ff21237e9ca6&rev=1'}
  ];

});

angular.module('fairForms')
.controller('FormController', function($scope, $http) {
  $scope.formData = {};

  // process the form
  $scope.processForm = function() {
    $http({
      method  : 'POST',
      url     : '/form/process',
      data    : $.param($scope.formData),  // pass in data as strings
      headers : { 'Content-Type': 'application/x-www-form-urlencoded',
                  'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }  // set the headers so angular passing info as form data (not request payload)
    })
    .success(function(data) {
      console.log(data);

      if (!data.success) {
        // if not successful, bind errors to error variables
        console.log(data);
      } else {
        // if successful, bind success message to message
        console.log(data.message);
      }
    }, function(response) {
      console.log(response);
    });
  };
});

angular.module('fairForms')
.directive('linkcopy', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('contextmenu', function() {
        var copied = element.createTextRange();
        copied.execCommand("Copy");
      })
    },
  }
});

angular.module('fairForms')
.directive('radio', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('click', function() {
        if(checkSmall()) {
          element.parent().children().children().prop("checked", false);
          element.children().prop("checked", true);
          element.parent().children().removeClass("form-container__form__fieldset__radiogroup__container__field--clicked");
          element.parent().children().addClass("form-container__form__fieldset__radiogroup__container__field");
          element.removeClass("form-container__form__fieldset__radiogroup__container__field");
          element.addClass("form-container__form__fieldset__radiogroup__container__field--clicked");
        }
      })
    },
  }
});

//# sourceMappingURL=app.js.map
