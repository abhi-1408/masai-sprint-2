arr=[]
var j=0
create('chowmein')
create('dosa')
create('vada')

function create(name){
    obj={}
    obj['dish']=name
    obj['price']=50+j*70
    obj['tag']=j
    arr.push(obj)
    j=j+1
}

var but0=document.getElementById('0')
var but1=document.getElementById('1')
var but2=document.getElementById('2')

var checkout=document.getElementById('checkout')
var total=document.getElementById('total')
var tot=0
var count=[]
var tax=0
var tip=0





var apply=document.getElementById('apply')
var c_flag=0
apply.addEventListener('click',function(){
    
    var coupon=document.getElementById('coupon').value
    var p=document.getElementById('work')
    if(tot>500 && c_flag==0){
        if(coupon=="get100")
        {
            c_flag=1
            tot=tot-100
            total.textContent=tot
            
            p.textContent="COUPON APPLIED"
        }
    }
})

















function display(){
    console.log(event.target)
    console.log(event.target.id)
    //count.push(event.target.id)
    console.log(count)
    var flag=0
    for(var i=0;i<count.length;i++){
        if(count[i]==event.target.id){
            flag=1
            break
        }
    }
    if(flag==1){
        //dont push again
        console.log('already present')
    }
    else if(flag==0){
        //push the dish
        console.log('IN HEre pUSHING DISH')
        count.push(event.target.id)
        var div=document.createElement('div')
        var num=1
        var pri=arr[event.target.id].price
        var cost=num*pri
        tot=cost+tot
        
        total.textContent=tot
        div.textContent=arr[event.target.id].dish+" price is: "+arr[event.target.id].price

        var minus=document.createElement('button')
        minus.textContent='-'
        var text=document.createElement('button')
        text.textContent=num
        var plus=document.createElement('button')
        plus.textContent='+'

        minus.addEventListener('click',function(){
            if(num>0){
                num=num-1
                console.log("in minus",num)
                text.textContent=num
                cost=num*pri
                console.log('cost is',cost)
                tot=tot-pri
                total.textContent=tot
                
            }
        })

        plus.addEventListener('click',function(){
            
                num=num+1
                console.log("in plus",num)
                text.textContent=num
                cost=num*pri
                console.log('cost is',cost)
                tot=tot+pri
                total.textContent=tot
            
        })
        var del=document.createElement('input')
        del.setAttribute('value','delete')
        del.setAttribute('type','button')
        del.setAttribute('class',arr[event.target.id].tag)

        del.addEventListener('click',function(){
            var ele=event.target.className
            for(var i=0;i<count.length;i++){
                    if(count[i]==ele){
                    flag=0
                    var temp=text.textContent
                    tot=tot-pri*temp
                    total.textContent=tot

                    
                    if(tot<500 && c_flag==1){
                        c_flag=0
                        tot=tot+100
                        total.textContent=tot
                        var p=document.getElementById('work')
                        p.textContent="COUPON REMOVED"
                        var coupon=document.getElementById('coupon')
                        coupon.value=""
                    }
                


                    count.splice(i,1)
                    break
                    }
            }
            event.target.parentNode.remove()
        })

        

        div.appendChild(minus)
        div.appendChild(text)
        div.appendChild(plus)
        
        div.appendChild(del)
        checkout.appendChild(div)

    }
    console.log(arr[event.target.id])


}

but0.addEventListener('click',display)
but1.addEventListener('click',display)
but2.addEventListener('click',display)


var tax_but=document.getElementById('tax_but')

tax_but.addEventListener('click',function(){
    var tax_percent=document.getElementById('tax_percent')
    tax=(tot)*(Number(tax_percent.value)/100)
    console.log('tax is',tax)
    tot=tot+tax
    total.textContent=tot
})

var tip_but=document.getElementById('tip_but')

tip_but.addEventListener('click',function(){
    var tip_val=document.getElementById('tip_val')
    tip=Number(tip_val.value)
    console.log('tip is',tip)
    tot=tot+tip
    total.textContent=tot
})

console.log(arr)