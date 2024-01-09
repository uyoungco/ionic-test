import { FC } from "react";
import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import './index.css';
import {CheyouList} from "@/pages/Home/type";
import Style from './index.module.scss'


interface CheyouItemProps {
  item: CheyouList;
}

const CheyouItem: FC<CheyouItemProps> = ({ item }) => {
  return (
    <IonItem
      className={Style.itemContainer}
      routerLink={`/message/${item.gid_str}`}
      detail={false}
    >
      {/*<div slot="start" className="dot dot-unread"></div>*/}
      <IonLabel className={Style.ionTextWrap}>
        <h2>
          {item.title}
          <span className="date">
            <IonNote>{item.create_time}</IonNote>
          </span>
        </h2>
        {/*<h3>{item.content}</h3>*/}
        <p>
          {item.content}
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default CheyouItem;
