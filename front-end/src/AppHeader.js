import RssParser from 'rss-parser';


function AppHeader(props){

  // async function parseRss () {
  //   const rssParser = new RssParser()
  //   const feed = await rssParser.parseURL('http://www.doctorsnews.co.kr/rss/clickTop.xml')
  //   feed.items.forEach((item) => {
  //     console.log(item);
  //   })
  // }

  // parseRss();


  return(
    <div className="appHeader">
      <div className="hospitalTitle">
        <span className="name">사조병원</span>
      </div>
    </div>
  );
}

export default AppHeader;