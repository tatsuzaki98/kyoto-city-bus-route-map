import React from 'react';
import {Props} from './types';


const View: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={`block fixed w-screen overflow-scroll ${props.state.isLinesShown && 'top-0 left-0 right-0 bottom-0'}`}
      style={{zIndex: 2000, backgroundColor: 'rgba(255,255,255,0.8)'}}
    >
      {/* Title */}
      <div className={`p-2 border-b-2 border-gray-400 block`}>
        <h1 className='font-bold'>京都市バス便覧</h1>
      </div>

      {props.store.stop && (
        <section className='block'>
          {/* Bus Stop Label */}
          <div className='pt-2 items-center'>
            {props.store.stop.properties.label}
          </div>

          {/* Related Lines */}
          {props.state.isLoading && <span>loading...</span>}
          {props.state.isLinesShown && (
            Object.values(props.store.lines).map((each, key) => (
              <div key={key} className='block'>
                <span
                  className='cursor-pointer text-green-500'
                  onClick={() => props.handlers.clickLine(each.primaryKey)}
                >
                  {each.label}
                </span>
              </div>
            ))
          )}

          {/* Open/Close Button */}
          <div className='pb-1 items-center'>
            <span className='text-blue-500 cursor-pointer' onClick={props.handlers.toggleLines}>
              {props.state.isLinesShown ? 'とじる' : `${props.store.stop.properties.label}を通る路線一覧`}
            </span>
          </div>
        </section>
      )}
    </div>
  );
};


export default View;
