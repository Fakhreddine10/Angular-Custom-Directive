# Angular-Custom-Directive

Angular-Custom-Directive, it's a module which allow developpers to apply a generic and a very used validation directives which are not exist by default in Angular, so in order to not working and write this directives in each project, developper cau use this module now.

# Documentation 

## Fomatting data

## List of Custom Validators 

### Password 
### Email 

## Password
Validate password with a regular expression.

```html
<input type="text" ngModel name="pwd" #pwd="ngModel" [passwordval]="'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'"/>
<p *ngIf="pwd.errors?.passwordval">Password not valid</p>

## Email
Validate email with a prefix 

```html
<input type="text" ngModel name="email" #email="ngModel" [emailval]="@gmail.com"/>
<p *ngIf="email.errors?.emailval">Email not valid</p>
