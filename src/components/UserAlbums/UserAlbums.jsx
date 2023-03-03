import React, { useState } from 'react';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { selectUserAlbums } from 'redux/albums/selectors';
import { filterAlbumsById } from 'utils/filterUserPostById';

import { ModalComponent } from './ModalAlbum';
import { Button } from './userAlbums.styled';

export function UserAlbums(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');

  const allAlboms = useSelector(selectUserAlbums);
  const userPostById = filterAlbumsById(allAlboms, id);

  useEffect(() => {
    setId(props.id);
  }, [props.id]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button onClick={() => openModal()}>Albums</Button>
      <ModalComponent
        isOpen={isOpen}
        onRequestClose={closeModal}
        id={id}
        albumsData={userPostById}
      />
    </div>
  );
}
