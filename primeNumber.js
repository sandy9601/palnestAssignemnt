let a=3,b=2,c=7,d=3

function primeReturn(a,b,c,d) {
    let res=[]
    if(d==0){
        return res
    }
    let ia=0
    let ib=0
    let ic=0
    let nexta=a
    let nextb=b
    let nextc=c
    for(let i=0;i<d;i++){
        res.push(Math.min(nexta,nextb,nextc))
        if(res[i]==nexta){
            nexta=res[ia++]*a
        }
        if(res[i]==nextb){
            nextb=res[ib++]*b
        }
        if(res[i]==nextc){
            nextc=res[ic++]*c
        }
    }
    return res
}
console.log(primeReturn(a,b,c,d))


