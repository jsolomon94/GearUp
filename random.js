var app = angular.module('formDude', []);
app.controller('myCtrl', function($scope) {

		$scope.Bag = 0;
		$scope.crayons = 0;
		$scope.pencils = 0;
		$scope.pens = 0;
		$scope.erasers = 0;
		$scope.Highlighters = 0;
		$scope.Binders = 0;
		$scope.IndexCards = 0;
		$scope.Rulers = 0;
		$scope.GraphPaper = 0;
		$scope.WhiteOut = 0;
		$scope.Notebook = 0;
		$scope.grand = 0

	$scope.changeThis = function(){

		var bag = $scope.FullBag;

		$scope.Bag = bag;
		$scope.crayons = bag;
		$scope.pencils = bag;
		$scope.pens = bag;
		$scope.erasers = bag;
		$scope.Highlighters = bag;
		$scope.Binders = bag;
		$scope.IndexCards = bag;
		$scope.Rulers = bag;
		$scope.GraphPaper = bag;
		$scope.WhiteOut = bag;
		$scope.Notebook = bag;

		$scope.changeThat();

	};

	$scope.changeThat = function(){

		var tot = $scope.Bag*24;
		tot+=$scope.crayons*2.77;
		tot+=$scope.pencils*0.97;
		tot+=$scope.pens*2.00;
		tot+=$scope.erasers*2.50;
		tot+=$scope.Highlighters*3.75;
		tot+=$scope.Binders*4.23;
		tot+=$scope.IndexCards*2.00;
		tot+=$scope.Rulers*2.00;
		tot+=$scope.GraphPaper*3.99;
		tot+=$scope.WhiteOut*2.83;
		tot+=$scope.Notebook*0.17;

		$scope.grand = tot;

	};

});