let data = JSON.stringify(storeFile.products);
data = JSON.parse(data);

const productDiv = document.querySelector('.productDiv');

let productList = [];

function prtArray(arr){
    productDiv.innerHTML = '';
    arr.forEach((data, i) => {
        var 템플릿 = 
        `<div draggable="true" class="product prdDrag${arr[i].id}">
            <div class="imgDiv"><img draggable="false" src="${arr[i].photo}" alt=""></div>
            <span class="product__title bold">${arr[i].title}</span>
            <span class="product__company">${arr[i].brand}</span>
            <span class="product__price">가격 : ${arr[i].price}</span>
            <input class="product__button prd${arr[i].id} button" type="button" value="담기">
        </div>`;
        productDiv.innerHTML += 템플릿;
        productList.push(arr[i]);
    });
}
prtArray(data);

const search = document.querySelector('.search');
search.addEventListener('input', () => {
    let beforeRegex = search.value.replace(/ /g, '');
    let regex = new RegExp(`[${beforeRegex}]`, 'g');
    let searchResult = data.filter(value => {
        return value.title.search(regex) > -1 || value.brand.search(regex) > -1;
    });
    function prtArraySearch(arr){
        productDiv.innerHTML = '';
        arr.forEach((data, i) => {
            var 템플릿 = 
            `<div draggable="true" class="product prdDrag${arr[i].id}">
                <div class="imgDiv"><img draggable="false" src="${arr[i].photo}" alt=""></div>
                <span class="product__title bold highlight">${arr[i].title}</span>
                <span class="product__company highlight">${arr[i].brand}</span>
                <span class="product__price">가격 : ${arr[i].price}</span>
                <input class="product__button prd${arr[i].id} button" type="button" value="담기">
            </div>`;
            productDiv.innerHTML += 템플릿;
        });
    }
    if(search.value.trim().length === 0){
        prtArray(data);
    } else {
        prtArraySearch(searchResult);
    }

    let highlight = document.querySelectorAll('.highlight');
    for(i = 0; i < highlight.length; i++){
        highlight[i].innerHTML = highlight[i].innerText.replace(regex, match => `<mark>${match}</mark>`);
    }
});

let countAry = [0, 0, 0, 0];

const shpList = document.querySelector('.shoppingBag__list');
const prd0 = document.querySelector('.prd0');
const prd1 = document.querySelector('.prd1');
const prd2 = document.querySelector('.prd2');
const prd3 = document.querySelector('.prd3');

function prtShoppingList(arr){
    shpList.innerHTML = '';
    arr.forEach((data, i) => {
        var 템플릿 = 
        `<div draggable="false" class="product prdD${arr[i].id}" style='display:none'>
            <div class="imgDiv"><img draggable="false" src="${arr[i].photo}" alt=""></div>
            <span class="product__title bold">${arr[i].title}</span>
            <span class="product__company">${arr[i].brand}</span>
            <span class="product__price">가격 : ${arr[i].price}</span>
            <input class="product__count prd${arr[i].id}input" type="number" value="${countAry[i]}">
        </div>`;
        shpList.innerHTML += 템플릿;
    });
}

prtShoppingList(data);

const prdD0 = document.querySelector('.prdD0');
const prdD1 = document.querySelector('.prdD1');
const prdD2 = document.querySelector('.prdD2');
const prdD3 = document.querySelector('.prdD3');

const prd0input = document.querySelector('.prd0input');
const prd1input = document.querySelector('.prd1input');
const prd2input = document.querySelector('.prd2input');
const prd3input = document.querySelector('.prd3input');

const totalPrice = document.querySelector('.totalprice');

prd0.addEventListener('click', () => {
    prdD0.style.display = 'block';
    countAry[0]++;
    prd0input.value = countAry[0];
    totalPrice.innerHTML = countAry[0]*10000 + countAry[1] * 20000 + countAry[2]*30000 + countAry[3] * 40000;
});
prd1.addEventListener('click', () => {
    prdD1.style.display = 'block';
    countAry[1]++;
    prd1input.value = countAry[1];
    totalPrice.innerHTML = countAry[0]*10000 + countAry[1] * 20000 + countAry[2]*30000 + countAry[3] * 40000;
});
prd2.addEventListener('click', () => {
    prdD2.style.display = 'block';
    countAry[2]++;
    prd2input.value = countAry[2];
    totalPrice.innerHTML = countAry[0]*10000 + countAry[1] * 20000 + countAry[2]*30000 + countAry[3] * 40000;
});
prd3.addEventListener('click', () => {
    prdD3.style.display = 'block';
    countAry[3]++;
    prd3input.value = countAry[3];
    totalPrice.innerHTML = countAry[0]*10000 + countAry[1] * 20000 + countAry[2]*30000 + countAry[3] * 40000;
});

prd0input.addEventListener('input', () => {
    if(prd0input.value == 0){
        prdD0.style.display = 'none';
    }
    countAry[0] = prd0input.value;
    totalPrice.innerHTML = countAry[0]*10000 + countAry[1] * 20000 + countAry[2]*30000 + countAry[3] * 40000;
});
prd1input.addEventListener('change', () => {
    if(prd1input.value == 0){
        prdD1.style.display = 'none';
    }
    countAry[1] = prd1input.value;
    totalPrice.innerHTML = countAry[0]*10000 + countAry[1] * 20000 + countAry[2]*30000 + countAry[3] * 40000;
});
prd2input.addEventListener('change', () => {
    if(prd2input.value == 0){
        prdD2.style.display = 'none';
    }
    countAry[2] = prd2input.value;
    totalPrice.innerHTML = countAry[0]*10000 + countAry[1] * 20000 + countAry[2]*30000 + countAry[3] * 40000;
});
prd3input.addEventListener('change', () => {
    if(prd3input.value == 0){
        prdD3.style.display = 'none';
    }
    countAry[3] = prd3input.value;
    totalPrice.innerHTML = countAry[0]*10000 + countAry[1] * 20000 + countAry[2]*30000 + countAry[3] * 40000;
});

const drag0 = document.querySelector('.prdDrag0');
const drag1 = document.querySelector('.prdDrag1');
const drag2 = document.querySelector('.prdDrag2');
const drag3 = document.querySelector('.prdDrag3');

drag0.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('number', 0);
});
drag1.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('number', 1);
});
drag2.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('number', 2);
});
drag3.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('number', 3);
});

shpList.addEventListener('dragover', (e) => {
    e.preventDefault();
});

shpList.addEventListener('drop', (e) => {
    e.preventDefault();
    let tData = e.dataTransfer.getData('number');
    if(tData == 0){
        prdD0.style.display = 'block';
        countAry[0]++;
        prd0input.value = countAry[0];
        totalPrice.innerHTML = countAry[0]*10000 + countAry[1] * 20000 + countAry[2]*30000 + countAry[3] * 40000;
    } else if (tData == 1){
        prdD1.style.display = 'block';
        countAry[1]++;
        prd1input.value = countAry[1];
        totalPrice.innerHTML = countAry[0]*10000 + countAry[1] * 20000 + countAry[2]*30000 + countAry[3] * 40000;
    } else if (tData == 2){
        prdD2.style.display = 'block';
        countAry[2]++;
        prd2input.value = countAry[2];
        totalPrice.innerHTML = countAry[0]*10000 + countAry[1] * 20000 + countAry[2]*30000 + countAry[3] * 40000;
    } else if (tData == 3){
        prdD3.style.display = 'block';
        countAry[3]++;
        prd3input.value = countAry[3];
        totalPrice.innerHTML = countAry[0]*10000 + countAry[1] * 20000 + countAry[2]*30000 + countAry[3] * 40000;
    }
});

const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.buy');
const done = document.querySelector('.done');
const close = document.querySelector('.close');
const receipt = document.querySelector('.receipt');

const canvas = document.querySelector('.receipt__canvas').getContext('2d');

modalOpen.addEventListener('click', () => {
    modal.style.display = 'block';
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});

done.addEventListener('click', () => {
    modal.style.display = 'none';
    receipt.style.display = 'block';

    let date = new Date();
    const now = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    canvas.font = "bold 9px '맑은 고딕";
    canvas.reset();
    canvas.beginPath();
    canvas.fillText('영수증', 20 ,10);
    canvas.font = "9px '맑은 고딕";
    canvas.fillText(now, 20, 20);
    
    let isPrinted = 0;
    
    for (let i = 0; i < 4; i++){
        if (countAry[i] == 0){
            continue;
        } else {
            if (isPrinted === 0){
                canvas.fillText(productList[i].title, 20, 40);
                canvas.fillText(productList[i].brand, 20, 50);
                canvas.fillText('가격 : ' + productList[i].price, 20, 60);
                canvas.fillText('수량 : ' + countAry[i], 20 ,70);
                canvas.fillText('합계 : ' + productList[i].price*countAry[i], 20, 80);
                isPrinted++;
            } else if (isPrinted === 1){
                canvas.fillText(productList[i].title, 120, 40);
                canvas.fillText(productList[i].brand, 120, 50);
                canvas.fillText('가격 : ' + productList[i].price, 120, 60);
                canvas.fillText('수량 : ' + countAry[i], 120 ,70);
                canvas.fillText('합계 : ' + productList[i].price*countAry[i], 120, 80);
                isPrinted++;
            } else if (isPrinted === 2){
                canvas.fillText(productList[i].title, 20, 100);
                canvas.fillText(productList[i].brand, 20, 110);
                canvas.fillText('가격 : ' + productList[i].price, 20, 120);
                canvas.fillText('수량 : ' + countAry[i], 20 ,130);
                canvas.fillText('합계 : ' + productList[i].price*countAry[i], 20, 140);
                isPrinted++;
            } else if (isPrinted === 3){
                canvas.fillText(productList[i].title, 120, 100);
                canvas.fillText(productList[i].brand, 120, 110);
                canvas.fillText('가격 : ' + productList[i].price, 120, 120);
                canvas.fillText('수량 : ' + countAry[i], 120 ,130);
                canvas.fillText('합계 : ' + productList[i].price*countAry[i], 120, 140);
                isPrinted++;
            }
        }
    }
    canvas.fillText(countAry[0]*10000 + countAry[1] * 20000 + countAry[2]*30000 + countAry[3] * 40000, 200, 20);
});

const x = document.querySelector('.receipt__x');
const closeReceipt = document.querySelector('.receipt__close');

x.addEventListener('click', () => {
    receipt.style.display = 'none';
});

closeReceipt.addEventListener('click', () => {
    receipt.style.display = 'none';
});
