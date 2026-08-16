const button =document.querySelector('.js-backToTop');



// 読み込みしたら必ず上から1000ｐｘの位置から始める
window.addEventListener(
    'load',()=>{window.scrollTo(0,1000);
    }
);

// スクロールイベント

window.addEventListener(
    'scroll',()=>{
        if(window.scrollY >1000){
            button.classList.add('is-active');
        }else{
        button.classList.remove('is-active');
        }
    }
);


// クリックイベント クリックされたら上に戻る
button.addEventListener(
    'click',()=>{window.scroll({
        top : 0 ,
        behavior : "smooth"
    });
        
        

    }
);




// 再読み込みした時のページ位置を固定
history.scrollRestoration = 'manual';

