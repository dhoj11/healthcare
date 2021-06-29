import RssParser from 'rss-parser';

import { faHospital, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function AppHeader(props){

  let contents = [];
  let parser = new RssParser();
  parser.parseURL('https://cors-anywhere.herokuapp.com/http://www.doctorsnews.co.kr/rss/clickTop.xml', function(err, feed) {
    if (err) throw err;
     feed.items.forEach(function(entry) {
      contents.push( {title: entry.title, link: entry.link} )
    })
  })

  var curContent;
  let length = contents.length;
  let i=0;

  setTimeout( () => {

    for(let index in contents){
      curContent = contents[index]
      console.log(curContent);
    }
  }, 2000);

  return(
    <div className="appHeader">
      <div className="hospitalTitle">
        <FontAwesomeIcon icon={faHospital} className="hospitalIcon"/>
        <span className="name">사조병원</span>
      </div>
      <div className="newContents">
        <span>{curContent && curContent.title}</span>
      </div>
      <div className="loginUser">
        <span className="name">의사 : 조운호</span>
        <span className="logOut"><FontAwesomeIcon icon={faSignOutAlt} className="logOutIcon"/>log-out</span>
      </div>
    </div>
  );
}

export default AppHeader;

