import angular from 'angular';

import App from 'src/sidenav/SideNavApp';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular.element( document )
	.ready( function() {
		angular
		.module( 'SideNav')
		.run(()=>{
			console.log(`Running the 'starter-app-bootstrap' ES6 Material-Start Tutorial`);
		});

	let body = document.getElementsByTagName("body")[0];
	angular.bootstrap( body, [ 'SideNav' ]);
});