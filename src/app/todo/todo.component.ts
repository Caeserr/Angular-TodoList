import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { WorkService }  from '../services/work.service';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoForm: FormGroup;
  works: string[];

  constructor( 
    private workService: WorkService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {

    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]]
    });
    this.works = this.workService.findAll();
  }

  add(): void {
    this.workService.add(this.todoForm.value.title);
    this.works = this.workService.findAll();
    
  }

  delete(index: number): void {
      this.workService.delete(index);
      this.works = this.workService.findAll();
    }
  

}
