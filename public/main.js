/**
 * Created by parker on 12/05/2023.
 */
let n =1 ;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n+1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n+=1
        }
    };
    request.send();
};
getJSON.onclick=()=>{
    const request= new XMLHttpRequest();
    request.open('get','/5.json');
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status ===200){
            console.log(request.response)
            const object= JSON.parse(request.response)
            myName.textContent= object.name

        }
    };
    request.send();
};
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    };
    // request.onerror= () =>{};
    request.send();
};

getHTML.onclick=() => {
    const request = new XMLHttpRequest();
    request.open('GET','/3.html')
    request.onload = () =>{
        // 创建div 标签
        console.log(request.response);
        // 填写 div 内容
        const div = document.createElement('div')
        // 插入
        div.innerHTML = request.response
        document.body.appendChild(div)
    };
    request.onerror= () =>{};
    request.send();
};

getJS.onclick =()=>{
    const request = new XMLHttpRequest();
    request.open('GET','/2.js')
    request.onload = () =>{

        //创建 script 标签
        const script = document.createElement('script')
        //填写 script 内容
        script.innerHTML = request.response
        //插入内容
        document.body.appendChild(script)
    }
    request.onerror = () =>{}
    request.send()
}
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get','/style.css'); //readyState = 1
    request.onreadystatechange= () =>{
        console.log(request.readyState)
        if(request.readyState === 4){
            // 下载完成,但不知道是成功 2xx 还是失败 404
            if(request.status>= 200 && request.status < 300){
                // //创建style标签
                const style= document.createElement('style');
                //填写style 内容
                style.innerHTML= request.response;
                //插到头里面
                document.head.appendChild(style);
            }else{
                alert('加载 CSS 失败')
            }
            if(request.status){

            }
            // console.log('request.response')
            // console.log(request.response)

        }

    };


    request.send()// readyState = 2
};
