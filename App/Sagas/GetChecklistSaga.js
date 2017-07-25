// @flow

import { put } from 'redux-saga/effects'
import API from '../Sagas/ApiSaga'

type TGetChecklist = {
  responseSuccess: Function,
  responseFailure: Function
}

export function * getChecklistGroups ({
  responseSuccess,
  responseFailure
}: TGetChecklist): Generator<Object, void, Object> {
  // todo
  // const { res, err } = yield * API('GET', 'checklist/')
  let res = [
    {
      name: 'Get Ready',
      items: [
        {
          name: 'Have Champion Support',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
        {
          name: 'Labor Begin On Own',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
        {
          name: 'Comfort During Labor',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
      ]
    },
    {
      name: 'Fall In Love',
      items: [
        {
          name: 'Initial Skin to skin',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
        {
          name: 'Magical First Hour',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
        {
          name: 'Baby\'s First Feed',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
        {
          name: 'Delayed Procedure',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
      ]
    },
    {
      name: 'Get Ready',
      items: [
        {
          name: 'Have Champion Support',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
        {
          name: 'Labor Begin On Own',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
        {
          name: 'Comfort During Labor',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
      ]
    },
    {
      name: 'Fall In Love',
      items: [
        {
          name: 'Initial Skin to skin',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
        {
          name: 'Magical First Hour',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
        {
          name: 'Baby\'s First Feed',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
        {
          name: 'Delayed Procedure',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
      ]
    },
    {
      name: 'Get Ready',
      items: [
        {
          name: 'Have Champion Support',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
        {
          name: 'Labor Begin On Own',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
        {
          name: 'Comfort During Labor',
          description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
          image: 'https://dummyimage.com/60x60',
        },
      ]
    }
  ]
  let err
  if (res) {
    yield put(responseSuccess(res))
  } else {
    yield put(responseFailure(err))
  }
}
