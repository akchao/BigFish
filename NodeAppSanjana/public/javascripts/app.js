var app = angular.module('angularjsNodejsTutorial',[]);
app.controller('myController', function($scope, $http) {
        $scope.message="";
        $scope.Submit = function() {
        //console.log('entered with'+ $scope.email);
        var request = $http.get('/data/'+$scope.email);
        request.success(function(data) {
            console.log('got response');
            $scope.data = data;
        });
        request.error(function(data){
            console.log('err');
        });

    };
});

// To implement "Insert a new record", you need to:
// - Create a new controller here
// - Create a corresponding route handler in routes/index.js
app.controller('insertController', function($scope,$http){
    $scope.message = "";
    $scope.Insert = function(){
        var request = $http.get('/login/'+$scope.login+'/name/'+$scope.name+'/sex/'+$scope.sex+'/RelationshipStatus/'+ $scope.RelationshipStatus + '/Birthyear/'+$scope.Birthyear);
        request.success(function(data) {
            console.log('got response');
            console.log(data + 'got row inserted');
        });
        request.error(function(data){
            console.log('err');
        });

    };
});

app.controller('friendsController', function($scope,$http){
    $scope.message = "";
    $scope.Show = function(){
        var request = $http.get('/personlogin/'+$scope.login);
        request.success(function(data){
            console.log('got response');
            $scope.data = data;
            console.log(data);
        });
        request.error(function(data){
            console.log('err');
        });

    };

});

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

// // usage example:
// var a = ['a', 1, 'a', 2, '1'];
// var unique = a.filter( onlyUnique );

app.controller('showQuery6Controller', function ($scope,$http){
  var companies = {};
  $http.get('/getQuery6b')
    .success(function(data){
      $scope.companies = data;
    })
    .error(function(data){
      console.log('error retrieving companies');
    });
  $scope.ShowResultsA = function(){
    var dataList = [];
    var request = $http.get('/getQuery6a');
            request.success(function(data){
            console.log('got response');
            for (x =0;x<data.length;x++)
            {
                dataList.push(data[x]);
            }
            $scope.dataList = dataList;
            $scope.colHeading = 'Year';
            $scope.colHeading2 = 'Number of Acquisitions';
        });
        request.error(function(data){
            console.log('err');
        });
  };

  $scope.ShowResultsB = function(company){
        var dataList = [];
        console.log(company);
        var url= '/getQuery6b';
        if(company !== undefined && company !== null){
          url = url+'?company=' + company;
        }
        request = $http.get(url);
                request.success(function(data){
                console.log('got response');
                for (x =0;x<data.length;x++)
                {
                    dataList.push(data[x]);
                }
                $scope.dataList = dataList;
                $scope.colHeading = 'Company';
                $scope.colHeading2 = 'Number of Acquisitions';
            });
            request.error(function(data){
                console.log('err');
            });
  };
});

//Query 7
app.controller('showQuery7Controller', function ($scope,$http){
  $scope.orderby= "5";
  $scope.ShowResultsA = function(){
    var dataList = [];
    var request = $http.get('/getQuery7a');
            request.success(function(data){
            console.log('got response');
            for (x =0;x<data.length;x++)
            {
                dataList.push(data[x]);
            }
            $scope.dataList = dataList;
            $scope.colHeading = 'CPC Group Id';
            $scope.colHeading2 = 'Class Description';
            $scope.colHeading3 = '';
        });
        request.error(function(data){
            console.log('err');
        });
  };

  $scope.ShowResultsB = function(orderby){
        var dataList = [];
        request = $http.get('/getQuery7b?orderby=' +orderby);
                request.success(function(data){
                console.log('got response');
                for (x =0;x<data.length;x++)
                {
                    dataList.push(data[x]);
                }
                $scope.dataList = dataList;
                $scope.colHeading = 'CPC Group Id';
                $scope.colHeading2 = 'Class Description';
                $scope.colHeading3 = 'Number of Renewals';
            });
            request.error(function(data){
                console.log('err');
            });
  };

});
