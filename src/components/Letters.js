import React from 'react'

import B from './svg/B'
import L from './svg/L'
import U from './svg/U'
import M from './svg/M'
import E from './svg/E'
import N from './svg/N'
import G from './svg/G'
import O from './svg/O'
import R from './svg/R'

const Letters = props => {
  return (
    <div style={{maxWidth: props.maxWidth, display: 'flex', justifyContent: 'center'}}>
      <B width={props.width} fill={props.fill} />
      <L width={props.width} fill={props.fill} />
      <U width={props.width} fill={props.fill} />
      <M width={props.width} fill={props.fill} />
      <E width={props.width} fill={props.fill} />
      <N width={props.width} fill={props.fill} />
      <div style={{ width: props.width }} />
      <G width={props.width} fill={props.fill} />
      <E width={props.width} fill={props.fill} />
      <O width={props.width} fill={props.fill} />
      <R width={props.width} fill={props.fill} />
      <G width={props.width} fill={props.fill} />
    </div>
  )
}

export default Letters
