// Extender Script
// Copyright (c)2013 PreSonus Software Ltd.

//////////////////////////////////////////////////////////////////////////////////////////////////

include_file ("MackieShared.js");

//////////////////////////////////////////////////////////////////////////////////////////////////
// MackieControlXTHandler
//////////////////////////////////////////////////////////////////////////////////////////////////

MackieControlXTHandler.prototype = new BasicMackieHandler ();
function MackieControlXTHandler ()
{	
}

function createInstance ()
{
	return new MackieControlXTHandler;
}