/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Music',
    date: 'August 15th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each peice of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new artible

*/
let dataId = 0
let deleteButtonId = 0

data.forEach(article => Object.assign(article, {
  id: dataId++
}))
sessionStorage.setItem('data', JSON.stringify(data))

const createArticles = (obj) => {
  let articleDiv = document.createElement('div')
  articleDiv.classList.add('article')

  let h2 = document.createElement('h2')
  h2.innerText = obj.title  

  let createPTags = (obj) => { 
    let infoArray = [obj.date, obj.firstParagraph, obj.secondParagraph, obj.thirdParagraph]
    let typeArray = ['date', 'paragraph', 'paragraph', 'paragraph']
    let tags = [] 
    infoArray.forEach((tagInfo, i) => {
      let p = document.createElement('p')
      p.classList.add(typeArray[i])
      p.innerText = tagInfo
      tags.push(p)
    })
    return tags
  }
  let pTags = createPTags(obj)
  
  let span = document.createElement('span')
  span.classList.add('expandButton')
  span.innerText = 'Read Article'
  Object.assign(span.style, {
    color: 'black',
    height: '1rem'
  })

  span.addEventListener('click', (event) => {
    if(Object.values(articleDiv.classList).indexOf('article-open') >= 0){
      articleDiv.style.overflowY = 'hidden'
      pTags.forEach(tag => tag.style.display = 'none')
      pTags[0].style.display = ''
      Object.assign(span.style, {
        left: '50%',
        top: '',
      })
      span.innerText = 'Read Article'
      return articleDiv.classList.remove('article-open')
    } else {
      pTags.forEach(tag => {
        tag.style.display = ''
        if(tag.innerText === 'undefined') tag.style.display = 'none'
      })
      articleDiv.style.overflowY = 'auto'
      Object.assign(span.style, {
        left: '92%',
        top: '5%'
      })
      span.innerText = 'X Close'

      Object.assign(deleteButton.style, {
      })
      return articleDiv.classList.add('article-open')
    }
  })
  
  let deleteButton = document.createElement('span')
  deleteButton.innerText = 'DELETE'
  deleteButton.setAttribute('id', `${deleteButtonId}`)
  deleteButton.classList.add('delete')
  deleteButtonId++

  Object.assign(deleteButton.style, {
    color: 'red',
    position: 'absolute',
    left: '89%',
    cursor: 'pointer'
  })

  deleteButton.addEventListener('click', (event) => {
    console.log(event.target.id)
    let newData = JSON.parse(sessionStorage.getItem('data'))
    let position = event.target.id
    newData.splice(position, 1)
    sessionStorage.setItem('data', JSON.stringify(newData))
    reWrite(newData)
  })

  articleDiv.appendChild(h2)
  articleDiv.appendChild(deleteButton)
  pTags.forEach(tag => articleDiv.appendChild(tag))
  articleDiv.appendChild(span)

  return articleDiv
}


const inputForm = () => {
  let formCover = document.createElement('div')
  let formDiv = document.createElement('form')
  let title = document.createElement('input')
  let date = document.createElement('input')
  let text = document.createElement('textarea')
  let submit = document.createElement('input')
  let close = document.createElement('span')
  let formElements = [close, title, date, text, submit]

  submit.setAttribute('type', 'submit')
  submit.setAttribute('value', 'submit')
  
  formElements.forEach(item => formDiv.appendChild(item))
  formCover.appendChild(formDiv)
  formCover.classList.add('form-cover')

  Object.assign(formCover.style, {
    display: 'none',
    position: 'fixed',
    top: '0',
    background: 'rgba(0, 0, 0, 0.7)',
    height: '100%',
    width: '100%'
  })

  Object.assign(formDiv.style, {
    display: 'flex',
    flexDirection: 'column', 
    backgroundColor: 'darkgray',
    position: 'fixed',
    top: '15%',
    left: '8%',
    width: '80%',
    border: '2px solid black',
    borderRadius: '1rem',
    padding: '1.5rem',
  })

  Object.assign(title.style, {
    height: '2rem',
    borderRadius: '1rem 1rem 0 0',
    border: '1px solid black',

  })
  title.setAttribute('placeholder', 'title')
  title.classList.add('title-input')

  Object.assign(date.style, {
    height: '2rem',
    border: '1px solid black',
  })
  date.setAttribute('placeholder', 'date')
  date.classList.add('date-input')

  Object.assign(text.style, {
    height: '20rem',
    borderRadius: '0 0 1rem 1rem',
    border: '1px solid black',
  })
  text.setAttribute('placeholder', 'write......')
  text.classList.add('text-input')

  Object.assign(submit.style, {
    width: '20%',
    margin: '.5rem 0 0 1rem',
    cursor: 'pointer'
  })

  submit.addEventListener('click', (event) => {
    let newArticleId = data.length
    event.preventDefault()
    let articleData = JSON.parse(sessionStorage.getItem('data'))
    console.log(articleData)
    articleData.push({
      'id': newArticleId++,
      'title': title.value,
      'date': date.value,
      'firstParagraph': text.value,
    })

    while(articlesDiv.hasChildNodes()) {
      articlesDiv.removeChild(articlesDiv.firstChild)
    }
    deleteButtonId = 0
    sessionStorage.setItem('data', JSON.stringify(data))
    let articles = articleData.map(article => createArticles(article))
    articles.forEach(article => articlesDiv.appendChild(article))
    formCover.style.display = 'none'
  })

  Object.assign(close.style, {
    cursor: 'pointer',
    marginLeft: '90%',
    marginBottom: '1rem'
  })
  close.innerText = 'X Close'
  close.addEventListener('click', (event) => {
    return formCover.style.display = 'none'
  })
  return formCover
}

let articleData = JSON.parse(sessionStorage.getItem('data'))
let articles = articleData.map(article => createArticles(article))

let articlesDiv = document.querySelector('.articles')
window.onload = () => {
  articles.forEach(article => articlesDiv.appendChild(article))
}

let form = inputForm()
document.body.appendChild(form)  

const reWrite = (newData) => {
  let articlesDiv = document.querySelector('.articles')
  deleteButtonId = 0
  while(articlesDiv.hasChildNodes()) {
    articlesDiv.removeChild(articlesDiv.firstChild)
  }
  let newArticles = newData.map(article => createArticles(article))
  newArticles.forEach(article => articlesDiv.appendChild(article))
}