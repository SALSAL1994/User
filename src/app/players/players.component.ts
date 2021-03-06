import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { CreateNewCategoryBodyDto } from '../models/CreateNewCategoryBodyDto';
import { CategoryBodyDto } from '../models/GetAllCategoriesResponseDto';
import { GetAllPlayersResponseDto, PlayerBodyDto } from '../models/GetAllPlayersResponseDto';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})






export class PlayersComponent implements OnInit {
  listinfo!:PlayerBodyDto[];
  listcategory!:CreateNewCategoryBodyDto[];
  id!: number|undefined;
  term!: string;
 


  constructor(private authService: AuthService,private http:HttpClient,private router:Router ,private route: ActivatedRoute) {


  
 
  }

  ngOnInit(): void {

    // this.id=this.router.getCurrentNavigation()?.extras?.state?['id']:
   
    let categoryId= this.route.snapshot.params['categoryId'];

    
    this.http.get<GetAllPlayersResponseDto>('https://localhost:7098/Category/GetAllPlayersForCurrentCategory?categoryId='+ categoryId).pipe(
      map(result => result.players)
    ).subscribe({
      next: data => {
      this.listinfo = data; 
    },
 
    })


  }







}


