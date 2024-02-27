import { Component, Input } from '@angular/core';
import { CommonModule, registerLocaleData  } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { IUser } from '../../../../../blogging-app/src/app/types/user.interface';
import localeBR from '@angular/common/locales/pt';
registerLocaleData(localeBR);


@Component({
  selector: 'lib-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() user!: IUser;
  faFlag = faFlag;
  faUserPlus = faUserPlus;
  faUserMinus = faUserMinus;
  faEnvelope = faEnvelope;
}
