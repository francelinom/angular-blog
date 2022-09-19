import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/08/O-Incrivel-Hulk-Divulgacao-1200x900-1.jpg';
  contentTitle: string = 'Título';
  contentDescription: string = 'fdfsfsdfdfsfsd';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      console.log(value.get('id'));
    });
  }
}
