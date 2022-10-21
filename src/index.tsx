import React from 'react';
import {store} from './componets/redux/state'
import {renderTree} from './renderTree';


store.subscribe(renderTree)
renderTree()