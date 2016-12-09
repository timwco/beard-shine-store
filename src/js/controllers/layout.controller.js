function LayoutController ($scope) {

  let vm = this;

  $scope.$on('cartQty', (data, qty) => {
    vm.cartQty = qty;
  });

}

LayoutController.$inject = ['$scope'];
export { LayoutController };