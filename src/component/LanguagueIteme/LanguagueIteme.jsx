import './LanguagueIteme.css';

function  LanguagueIteme (props){
    return(
       <button> 
        <img src={props.UserIcone}></img>
        <span className='UserName'>{props.UserName}</span>
        { props.status=="online"?(<span className='onlinedot'></span>):(<span className='oflinedot'></span> )}
       </button>
    );
}
export default LanguagueIteme