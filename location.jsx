import '../style/location.css'

function location(){
    return(
        <div class="location_wrap">
        <h1>찾아오시는 길</h1>
        
        <section class="content">
            <div class="location_map">지도 위치</div>
        <div className="container">
        <div className="row">
        <div className="col-4">
            <p>위치</p>
            <p>서울시 금천구 범안로 9길 23<br/>
            지하철 1호선 독산역 1번출구</p>
            </div>
            <div className="col-4"> 
            <p class="location_info1">운영 시간</p>
            <p class="location_info2">평일 &#40;화~금&#41; <br/>
            토 &#183; 일 &#183; 공휴일<br/>
            문화가 있는 날 운영<br/>
            <br/>
            휴관<br/>
            </p>
            <p class="location_info3">오전 10시–오후 8시<br/>
            오전 10시–오후 6시<br/>
            마지막 수요일<br/>
            오전 10시–오후 10시<br/>
            매주 월요일 휴관<br/>
            정기휴관 &#40;1월 1일&#41;<br/>
            </p>
            </div>
            <div className="col-4">
            <p>Contact</p>
            <p>thirdam@third-artmuseum.com<br/>
                02-2345-6789</p>
            </div>
            </div>
            </div>
            </section>
            </div>
            
            

    )
}
export default location;