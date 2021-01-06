import {
	Injectable
} from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpHeaders
} from '@angular/common/http';
import {
	UserService
} from './service/user-service.service';
import {
	Observable
} from 'rxjs';
import {
	Base64
} from 'js-base64';
import {
	environment
} from '../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AppCommonServiceService implements HttpInterceptor {

	auth = Base64.encode(environment.base64APIAuth);

	constructor(public userService: UserService) {}

	intercept(request: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {

		request = request.clone({
			setHeaders: {
				Authorization: `Basic ${this.auth}`
			}
		});
		return next.handle(request);
	}
}
