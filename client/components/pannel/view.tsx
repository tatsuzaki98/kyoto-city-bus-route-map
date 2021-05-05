import React from 'react';
import {Props} from './types';


const View: React.FC<Props> = (props: Props) => {
  return (
    <div
      className='flex-1 fixed w-screen'
      style={{zIndex: 2000, backgroundColor: 'rgba(255,255,255,0.8)'}}
    >
      {/* Title */}
      <div className={`p-2 border-b-2 border-gray-400`}>
        <h1 className='font-bold'>京都市バス便覧</h1>
      </div>

      {props.store.stop && (
        <section>
          {/* Bus Stop Label */}
          <div className='pt-2 items-center'>
            {props.store.stop.properties.label}
          </div>

          {/* Related Lines */}
          {props.store.isPannelActive && (
            <div/>
          )}

          {/* Open/Close Button */}
          <div className='pb-1 items-center'>
            <span className='text-blue-400'>
              とじる/{props.store.stop.properties.label}を通る路線一覧
            </span>
          </div>
        </section>
      )}
    </div>
  );
};


export default View;
