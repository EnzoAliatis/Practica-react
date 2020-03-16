import * as React from 'react'
import { Link } from '@reach/router'
import styled from 'styled-components'

export const Logo = (props) => {
  return (
    <Link to='/'>

      <Svg
        width={403.839}
        height={121.405}
        viewBox='48.081 14.298 403.839 121.405'
        style={{
          background: '0 0'
        }}
        preserveAspectRatio='xMidYMid'
        {...props}
      >
        <defs>
          <filter
            id='prefix__editing-stripe-bk'
            filterUnits='userSpaceOnUse'
            x='-100%'
            y='-100%'
            width='300%'
            height='300%'
          >
            <feFlood floodColor='#700f0f' result='flood1' />
            <feFlood floodColor='#fff' floodOpacity={0.5} result='flood2' />
            <feImage
              xlinkHref='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAwcHgiIGhlaWdodD0iMTAwMHB4Ij48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQiIGhlaWdodD0iNCI+PHBhdGggZD0iTSAtNCAtNCBMIDggOCBNIC04IC00IEwgNCA4IE0gLTQgLTggTCA4IDQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+'
              width={2000}
              height={1000}
              result='image'
            />
            <feTile in='image' result='tile' />
            <feComposite operator='in' in='flood1' in2='tile' result='tile2' />
            <feGaussianBlur in='SourceAlpha' stdDeviation={10} result='blur' />
            <feComposite operator='in' in='tile2' in2='blur' result='cloud' />
            <feMorphology
              operator='dilate'
              radius={2}
              in='SourceAlpha'
              result='dilate'
            />
            <feComposite operator='in' in='flood2' in2='dilate' result='base' />
            <feMerge>
              <feMergeNode in='cloud' />
              <feMergeNode in='base' />
              <feMergeNode in='SourceGraphic' />
            </feMerge>
          </filter>
        </defs>
        <g filter='url(#prefix__editing-stripe-bk)'>
          <path
            d='M140.554 105.72q-8.19 0-8.96-11.65h-11q-1.28 2.95-2.18 5.51l-1.66 4.86h-8.96l20.16-42.24h13.76l2.68 31.1q.64 6.72 3.2 8.71-1.85 3.71-7.04 3.71zm-14.46-24.45l-3.52 8.13h8.83l-.77-16.45v-1.73l-4.54 10.05zm45.38-10.75q2.3 0 4.09.51.07-.25.19-.96l.32-1.98q.26-1.28.64-3.39l1.03-5.06 12.73-1.28-7.1 37.12q-.06.38-.06 1.02v1.03q0 1.41.7 2.46.7 1.06 1.86 1.06-1.28 3.01-5.19 4.29-1.34.38-3.23.38t-3.62-.99q-1.72-.99-2.24-2.66-1.02 1.67-3.07 2.66-2.05.99-5.02.99-2.98 0-5.44-.77-2.47-.77-4-2.43-2.82-3.26-2.82-10.69 0-9.6 5.63-15.42 5.64-5.89 14.6-5.89zm-.45 3.84q-2.37 0-3.65 2.56-1.28 2.56-2.59 8.9-1.31 6.33-1.31 12.03 0 3.9 2.3 3.9 2.05 0 3.49-2.05 1.44-2.04 2.01-5.44l3.46-18.75q-1.34-1.15-3.71-1.15zm34.24 31.36q-14.08 0-14.08-13.25 0-9.41 5.18-15.49 5.51-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.5 16.19-5.38 5.89-14.59 5.89zm1.66-27.84q-.77 1.73-1.37 4.32-.61 2.59-1.38 6.69-.77 4.09-.77 9.15 0 1.66.55 2.75.54 1.09 2.01 1.09 1.47 0 2.4-.7.93-.71 1.63-2.37 1.28-2.95 2.31-8.42 1.02-5.47 1.12-7.84.09-2.37.09-4.13 0-1.76-.51-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62zm52.03 22.18q-2.68 2.72-6.36 4.19-3.68 1.47-7.33 1.47t-4.93-.64l-1.98 10.88-13 1.28 8.84-45.44 10.43-1.09-.83 4.42q2.68-4.55 8.25-4.55 6.27 0 9.6 4.04 2.95 3.64 2.95 9.21t-1.48 9.54q-1.47 3.97-4.16 6.69zm-14.46-17.96l-3.39 18.76q1.34 1.15 3.01 1.15 1.66 0 2.62-.64.96-.64 1.66-1.92 1.92-3.46 3.46-13.95.45-3.08.45-6.08 0-3.01-.67-3.97-.68-.96-1.96-.96-3.9 0-5.18 7.61zm24.96 15.94q0-1.73.9-6.08l3.39-17.28h-3.78l.26-1.92q7.68-2.3 15.1-7.94h3.07l-1.53 6.98h4.99l-.58 2.88h-4.92l-3.27 17.28q-.83 3.97-.83 5.31 0 3.07 2.69 3.71-.64 2.18-2.95 3.46-2.3 1.28-5.56 1.28-3.27 0-5.12-2.05-1.86-2.05-1.86-5.63zm47.1-36.29q15.68 0 15.68 11.07 0 6.08-3.9 9.73-3.84 3.65-10.56 3.65-3.14 0-5.57-1.79-1.15-.77-1.92-1.79 4.67 0 7.14-2.85 2.46-2.85 2.46-8.42t-5.5-5.57h-1.54q-.38 0-.7.07l-7.36 38.59h-13.89l7.87-41.92q6.85-.64 10.82-.7 3.97-.07 6.97-.07zm41.92 31.87q1.6 1.09 1.6 3.49 0 2.4-1.21 3.94-1.22 1.53-3.2 2.56-4.1 2.11-8.51 2.11-4.42 0-7.01-.96t-4.32-2.75q-3.39-3.39-3.39-9.6 0-9.67 5.24-15.55 5.64-6.34 15.43-6.34 6.08 0 9.09 2.56 2.24 1.92 2.24 5.06 0 11.26-19.46 11.26-.26 1.66-.26 3.07 0 2.95 1.32 4.07 1.31 1.12 3.74 1.12t5.02-1.12q2.6-1.12 3.68-2.92zm-13.05-6.97q4.54 0 7.17-2.82 2.62-2.69 2.62-6.97 0-1.48-.54-2.28-.55-.8-1.64-.8-1.08 0-2.01.42-.93.42-1.89 1.82-2.37 3.2-3.71 10.63zm22.21 11.39q0-1.73.89-6.08l3.39-17.28h-3.77l.25-1.92q7.68-2.3 15.11-7.94h3.07l-1.54 6.98h5l-.58 2.88h-4.93l-3.26 17.28q-.83 3.97-.83 5.31 0 3.07 2.68 3.71-.64 2.18-2.94 3.46-2.3 1.28-5.57 1.28-3.26 0-5.12-2.05-1.85-2.05-1.85-5.63z'
            fill='#de530f'
          />
        </g>
        <style />
      </Svg>
    </Link>
  )
}

const Svg = styled.svg`
  width: 250px;
  margin-left: -10px;
  margin-top: -30px;
`
