import styled from 'styled-components';


const StyledCard = styled.div`
border: 1px solid #ccc;
background_color: #fff;
box-shadow: 5px 5px, 10px, 5px rgba(0, 0, 0, 0.5);
padding: 30px;
margin: 30px 0;
display: flex;
`;

const Avatar = styled.img`
border-radius: 100%;
height: 100px;
`;

const Details = styled.div`
color: #777;
flex: 1;
padding: 10px;
border-left: 1px solid #999;
`;

const CloseButton = styled.button`
border-radius: 100%;
border: 0;
background-color: #888;
color: #fff;
text-align: center;
height: 25px;
width: 25px;

`;









const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic="" }) => {
    return (
        <StyledCard>
            <div className="flex flex-1">
                <div className="pr-15">
                    <Avatar src={profilePic} alt={`Profile of ${firstName} ${lastName}. `} />
                </div>
                <Details>
                    <p>{firstName} {lastName }</p>
                    <p>{phoneNumber}</p>
                </Details>
            </div>
            <div className="flex align-items-center">
                <CloseButton>X</CloseButton>
            </div>
        </StyledCard>
    )
}

export default ContactCard;