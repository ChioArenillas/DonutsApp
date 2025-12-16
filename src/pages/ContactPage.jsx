import Link from 'next/link'
import React from 'react'

export default function ContactPage() {
  return (
    <div className='page'>
      <div>
        <h2 className='title'>CONTACT</h2>
      </div>
      <div className='contactDetails'>
        <p>SWEET & SALTY</p>
        <p>Madrid</p>
        <p>sweetandsalty@gmail.com</p>
      </div>
      <div>
        <button>
        <Link className='button-link' href={{
            pathname:'/'
            }}>Back to Homepage</Link>
        </button>
      </div>
    </div>
  )
}
