import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError} from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { Post } from "./post.model";

@Injectable({
    providedIn: 'root'
})
export class PostService{

    error = new Subject<string>();
    constructor(private http: HttpClient){}
    
    createAndStorePost(title:string,content:string){
        const postData: Post = {title:title, content:content};
        return  this.http.post<{name: string}>('https://ngtestferchonossa-default-rtdb.firebaseio.com/posts.json'
            ,postData,
            {
                observe:'response'
            }
        ).subscribe(responseData=>{
          console.log(responseData);
        },error=>{
            this.error.next(error.message);
        });
    }
    fetchPosts(){
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');
        searchParams = searchParams.append('custom', 'key');
        return this.http.get<{[key:string]:Post}>('https://ngtestferchonossa-default-rtdb.firebaseio.com/posts.json',
         {
            //header body
            headers: new HttpHeaders({
                'customHeader':'hello'
            }),
            params: searchParams
         }
         ).pipe(map(responseData =>{
                const postsArray: Post[] = [];
                for(const key in responseData){
                    if(responseData.hasOwnProperty(key)){
                          postsArray.push({...responseData[key], id:key});
                    }
                }
                return postsArray;
                }),catchError(errorRes=>{
                    //send to analytics server
                   return throwError(errorRes);
                })
                );
    }
    deletePosts(){
       return this.http.delete('https://ngtestferchonossa-default-rtdb.firebaseio.com/posts.json',
       {
        observe: 'events',
        responseType: 'json'
       }
       ).pipe(tap(event=>{
        console.log(event);
       }));
    }
}