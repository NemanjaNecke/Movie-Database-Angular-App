
import { ActivatedRoute } from '@angular/router';
import { PersonService } from './person.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Person } from './person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  imgPath = 'http://image.tmdb.org/t/p/w1280/';
  person!: Person;
  constructor(private personService: PersonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({id}) => {
      this.personService.getPerson(id).subscribe((personData) => {
        this.person = personData;
      })
    })
  }

}
