import { trigger, state, style, transition, animate, keyframes, group  } from '@angular/animations';
export const slideInAnimation =  [

trigger('divEst',[
    state('normal',style({
      'background-color': 'red',
      'transform': 'translateX(0px) rotate(0) scale(1)'
    })),
    state('highLighted',style({
      'background-color': 'black',
      'transform':'translateX(900px) rotate(90deg) scale(0.5)'
    })),
  
    transition('normal <=> highLighted',animate(1000))
    
  ]),
/////////////////////////////////////////////////////////////////////////////
  trigger('wildEst',[
    state('normal',style({
      'background-color': 'red',
      transform: 'translateX(0px) rotate(0) scale(1)'
    })),
    state('highLighted',style({
      'background-color': 'black',
      'transform':'translateX(900px) rotate(90deg) scale(0.5)'
    })),
    state('shrunken',style({
        'background-color': 'green',
        'transform':'translateX(300px) rotate(0deg) scale (0.6)'
      })),
  
    transition('normal => highLighted',animate(1000)),
    transition('highLighted => normal',animate(1000)),
    transition('shrunken => *',[
      style({
        'background-color': 'orange'
      }), 
      animate(600,style({
        'box-shadow': '10px 10px lightblue'
      })),
      animate(300)
    ]),
  ]),
///////////////////////////////////////////////////////////////////////////
  trigger('list1',[
    state('in',style({
      'opacity': '1',
      'transform': 'translateX(0px)'
    })),
  
    transition('void => *',[
      style({
        'opacity': '0',
        'transform': 'translateX(-100px)'
      }),
      animate(1000)
    ]),
      transition('* => void',[
        animate(1000,style({
          'transform': 'translateX(100px)',
          'opacity': '0'
        }),
      )])
    
  ]),
//////////////////////////////////////////////////////////////////////////////
trigger('list2',[
  state('in',style({
    'opacity': '1',
    'transform': 'translateX(0px)'
  })),

  transition('void => *',animate(1000,keyframes([
    style({
      'transform':'translateX(100px)',
      'opacity':'0',
      offset:0
    }),
    style({
      'transform':'translateX(-50px)',
      'opacity':'0.5',
      offset:0.3
    }),
    style({
      'transform':'translateX(-20px)',
      'opacity':'1',
      offset:0.8
    }),
    style({
      'transform':'translateX(0px)',
      'opacity':'1',
      offset:1
    })
  ]))),
    transition('* => void',[
      group([
        animate(300,style({
          'color': 'red',
        })),
        animate(600,style({
          'transform': 'translateX(100px)',
          'opacity': '0'
        })),
      ]),
     
    ])
  
]),

]

