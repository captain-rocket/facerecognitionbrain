import React from 'react';
import { motion } from 'framer-motion';

const Profile = ({ onRouteChange ,id, name, email, entries, joined }) => {
  return (
    <div>
    <motion.div animate={{x: [-500, 0,], y: 200, scale: 2, transition: { delay: .5, duration: 0.5 }}}>
      <h1>{`${name}`}</h1>
      <p>ID: {`${id}`}</p>
      <p>Email: {`${email}`}</p>
      <p>Number of entries{`${entries}`}</p>
      <p>Date joined: {`${joined}`}</p>
      </motion.div>
    </div>
  )
}

export default Profile;