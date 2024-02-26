import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './services/user.service';
import { ModalComponent } from '../modal/modal.component';
import { IUser } from './types/user.interface';
import { UserIdService } from './services/userid.service';

@Component({
  selector: 'lib-modal-container',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './modal-container.component.html',
  styleUrl: './modal-container.component.css',
  providers: [UserService]
  })

export class ModalContainerComponent implements OnInit {
  @Input() userId!: number;
  userDetails!: IUser;

  constructor(private userService: UserService, private userIdService: UserIdService) {
    this.userId = this.userIdService.getUserId();
  }

  ngOnInit(): void {
    this.userService.getUser(this.userId).subscribe(user => {
      this.userDetails = user;
    })
  }
}
