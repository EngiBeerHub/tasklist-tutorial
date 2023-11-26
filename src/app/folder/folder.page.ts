import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  title = 'タスク登録';
  tasks: { name: string }[] = [{ name: 'タスク1' }, { name: 'タスク2' }];
  task!: string;

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage['tasks']);
    }
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  addTask() {
    this.tasks.push({
      name: this.task,
    });
    localStorage['tasks'] = JSON.stringify(this.tasks);
    this.task = '';
  }
}
