import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new Model();

  receberDados() {
    console.log(this.userModel)

    this.loginService.login(this.userModel).subscribe((response) => {
      console.log("Deu certo")
      localStorage.setItem("nomeUsuario", response.body.user.nome)

      this.router.navigateByUrl("/")
    }, (respostaErro) => {
      console.log("Deu erro")
      alert(respostaErro.error();
      )
    })
  }
}

