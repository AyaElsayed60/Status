import'./Languageswrapper.css'
import UserImg from '../../assets/images/abstract-user-flat-4.png';
import LanguagueIteme from '../LanguagueIteme/LanguagueIteme';


function  Languageswrapper (){
const Arrayofobjects = [
    {UserName:"Aya" ,UserIcone:UserImg,id:1,status:"online"},
    {UserName:"Eman" ,UserIcone:UserImg,id:2,status:"online"},
    {UserName:"Omnia",UserIcone:UserImg ,id:3,status:"ofline"},
    {UserName:"Talia",UserIcone:UserImg,id:4 ,status:"online"},
    {UserName:"Asmaa",UserIcone:UserImg ,id:5,status:"ofline"},
];

return(
<div id='Languageswrapper'>
{Arrayofobjects.map((item)=>{
return <LanguagueIteme 
key={item.id}
UserName={item.UserName} 
UserIcone={item.UserIcone}
status={item.status}
>
</LanguagueIteme>
})}
</div>
);
}
export default Languageswrapper









     /*   <div id='Languageswrapper'>
           <LanguagueIteme languagename="HTML" LanguageIcone={htmllogo}  ></LanguagueIteme>
           <LanguagueIteme languagename="CSS" LanguageIcone={csslogo}></LanguagueIteme>
           <LanguagueIteme languagename="JavaScript" LanguageIcone={javalogo}></LanguagueIteme>
           <LanguagueIteme languagename="Accessibility" LanguageIcone={accesslogo}></LanguagueIteme>
        </div>*/
