import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../../blogging-app/src/services/user.service';
import { ModalComponent } from '../modal/modal.component';
import { IUser } from '../../../../../blogging-app/src/app/types/user.interface';
import { UserIdService } from '../../../../../blogging-app/src/services/userid.service';

@Component({
  selector: 'lib-modal-container',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './modal-container.component.html',
  styleUrl: './modal-container.component.css',
  providers: [UserService, UserIdService]
  })

export class ModalContainerComponent implements OnInit {
  userId: number = 0;
  user!: IUser;

  constructor(public userIdService: UserIdService) {}

  ngOnInit(): void {
    this.userIdService.currentUser.subscribe(user => this.user = user);
  }
}
