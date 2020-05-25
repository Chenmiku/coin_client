import { Component, OnInit, OnDestroy } from '@angular/core';
import {getSession} from '../x/storage/storage'
declare var toastr: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Sacombank';

  constructor(
    ) {

    }
    public ngOnInit(): void {
        //common function run
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "6000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        //toastr style
        // ---toastr.success('Lưu thành công');
        // ---toastr.error(this.message);
        // ---toastr.warning('Password không chứa các kí tự đặc biệt');        
        
        localStorage.setItem('userToken', getSession('session_id'))
    }

    public ngOnDestroy(): void {
        // console.log(getItem('user'))
        // removeSession()
    }
}
