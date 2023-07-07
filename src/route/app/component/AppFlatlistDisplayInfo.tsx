import React from 'react'
import { FootballDTO } from '../../../model/Football.dto'

interface Props {
  data: FootballDTO[]
  renderItem: (item: FootballDTO, index: number) => React.ReactNode
}

const AppFlatlistDisplayInfo: React.FC<Props> = (props) => {
  const { data, renderItem } = props
  return (
    <React.Fragment>
      {data?.map((item, index) => renderItem(item, index))}
    </React.Fragment>
  )
}

export default AppFlatlistDisplayInfo