export type Action = {type: 'add_step', payload: object} 
| {type: 'previous_step'} | {type: 'next_step'};