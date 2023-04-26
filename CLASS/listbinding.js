

class listBinding
{
    constructor(_myListElement)
    {
        this._myListElement = _myListElement;
        this.listText = ['Money','Alcohol','e-wallet'];
    }


    update()
    {
        while(this._myListElement.firstChild)
        {
            this._myListElement.removeChild(this._myListElement.firstChild);
        }

        this.listText.forEach(listdata =>{

           this._myListElement.appendChild(this.createchild(listdata));
        });

    }

    createchild(element)
    {
        const li = document.createElement('li');
        li.textContent = element;
        li.style.color = "red";
        return li;
    }

    add(text)
    {
        this.listText.push(text);
       this.update();
    }


    // remove(indextext)
    // {
    //    this.indextext.forEach( data =>{
    //     console.log(data);
    //    });
    // }

}

export default listBinding;