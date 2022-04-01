import { useEffect } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import classes from '@/src/containers/SearchTable/index.module.css'

export const SearchTableContainer: React.FC = () => {
  const { query } = useRouter()
  useEffect(() => {
    if (typeof document !== 'undefined' && query.table) {
      const element = document.querySelector(`#table-${query.table}`)
      element?.classList.add(classes.target)
    }
  }, [query.table])
  return (
    <div className={clsx(`flex flex-col justify-center space-y-5`, classes.searchTable)}>
      <section className="flex justify">
        <article className="flex">
          <div className="flex flex-col">
            <p id="table-14">14</p>
            <p id="table-16">16</p>
            <p id="table-18">18</p>
          </div>
          <div className="flex flex-col">
            <p id="table-8">8</p>
            <p id="table-10">10</p>
            <p id="table-12">12</p>
          </div>
          <div className="flex flex-col items-center ">
            <p id="table-2">2</p>
            <p id="table-6">6</p>
          </div>
        </article>
        <article className="flex items-center">
          <p id="table-0">主桌</p>
        </article>
        <article className="flex">
          <div className="flex flex-col">
            <p id="table-1">1</p>
            <p id="table-3">3</p>
          </div>
          <div className="flex flex-col">
            <p id="table-5">5</p>
            <p id="table-7">7</p>
            <p id="table-9">9</p>
          </div>
          <div className="flex flex-col">
            <p id="table-11">11</p>
            <p id="table-13">13</p>
          </div>
        </article>
      </section>
      <section className="bg-purple-500 w-full text-center rounded-md">走道</section>
      <section className="flex space-x-5">
        <article className="flex flex-col justify-center items-center">
          <div className="flex">
            <p id="table-15">15</p>
            <p id="table-17">17</p>
          </div>
          <p id="table-19">19</p>
        </article>
        <article className="flex flex-col justify-center items-center">
          <div className="flex">
            <p id="table-20">20</p>
            <p id="table-21">21</p>
          </div>
          <p id="table-22">22</p>
        </article>
      </section>
    </div>
  )
}
