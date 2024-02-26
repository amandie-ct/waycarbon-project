import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { ModalComponent } from '../modal/modal.component';
import { IUser } from './types/user.interface';
import { UserIdService } from '../../../../../blogging-app/src/services/userid.service';

@Component({
  selector: 'lib-modal-container',
  standalone: true,
  imports: [ModalComponent, CommonModule],
  templateUrl: './modal-container.component.html',
  styleUrl: './modal-container.component.css',
  providers: [UserService]
  })

export class ModalContainerComponent implements OnInit {
  userId: number = 0;
  userDetails!: IUser;

  constructor(private userService: UserService, private userIdService: UserIdService) {}

  ngOnInit(): void {

    this.userIdService.currentUserId.subscribe(userId => this.userId = userId);

    this.userService.getUser(this.userId).subscribe(user => {
      this.userDetails = user;
    })
  }
}
