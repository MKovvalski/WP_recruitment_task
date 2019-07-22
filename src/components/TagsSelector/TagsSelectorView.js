import React from 'react'
import SelectableTag from '../../components/SelectableTag'
import Loader from '../Loader';
import PageSection from '../PageSection';
import AsideControls from '../AsideControls';

const tagsSelectorView = ({ tagsArray, activeTagsArray, toggleTag, controls, loadingState }) => {
    const shouldDisplay = state => loadingState === state
    return (
        <PageSection
            title='Wybierz Tagi'
            componentsAside={<AsideControls controlsArray={controls} />}
        >
            <div className='tags-selector'>
                {shouldDisplay('loading') && <Loader />}
                {shouldDisplay('no-tags') && <div className='tags-selector__error'>Ta kategoria nie posiada tagów</div>}
                {shouldDisplay('failed') && <div className='tags-selector__error'>Coś poszło nie tak!</div>}
                {shouldDisplay('success') && <>
                    {tagsArray.map((tag, i) => {
                        const active = activeTagsArray.find(activeTag => activeTag === tag)
                        return <SelectableTag
                            key={i}
                            title={tag}
                            active={active}
                            onClick={() => toggleTag(tag)}
                            modifiers='tags'
                        />
                    })}
                </>
                }
                </div>
        </PageSection>
    )
}

export default tagsSelectorView