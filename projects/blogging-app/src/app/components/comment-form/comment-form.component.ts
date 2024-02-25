import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})
export class CommentFormComponent implements OnInit{
  @Input() submitLabel!: string;
  @Input() initialText: string = '';
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [this.initialText, Validators.required]
    })
  }

  onSubmit(): void {
    console.log('onSubmit', this.form.value);
  }
}
