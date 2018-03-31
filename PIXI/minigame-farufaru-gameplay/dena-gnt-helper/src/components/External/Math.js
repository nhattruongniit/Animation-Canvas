Object.assign(Math,{
    range(a,b){
        return (b - a) * Math.random() + a;
    },
    polygonArea(points){
        const arrL = points.slice(0).reverse();
        arrL.push(arrL[0]);
        let sumX = 0, sumY = 0;
        
        for(let i = 0; i < points.length; i ++){
            sumX += arrL[i].x * arrL[i+1].y;
            sumY += arrL[i].y * arrL[i+1].x;
        }
        return Math.abs(sumX - sumY)/2;
    }
})