import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginAlunoComponent } from './components/login-aluno/login-aluno.component';
import { LoginIntegranteAPMComponent } from './components/login-integrante-apm/login-integrante-apm.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { CadastroIntegranteApmComponent } from './components/cadastro-integrante-apm/cadastro-integrante-apm.component';
import { EsqueceuSenhaComponent } from './components/esqueceu-senha/esqueceu-senha.component';
import { ResetarSenhaComponent } from './components/resetar-senha/resetar-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginAlunoComponent,
    LoginIntegranteAPMComponent,
    CadastroAlunoComponent,
    CadastroIntegranteApmComponent,
    EsqueceuSenhaComponent,
    ResetarSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
